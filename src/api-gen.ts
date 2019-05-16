import { Project, Scope, SourceFile, StructureKind } from "ts-morph";
import * as rimraf from "rimraf";

const project = new Project();

const sdkOutPath = `./@strapi-sdk-typescript/sdk.ts`

//const sdkInterfaceDeclarations=project.addExistingSourceFiles("@strapi-types/**/*{.d.ts,.ts}");

const sdkInterfaceDeclarations = project.addExistingSourceFile("./@strapi-types/index.ts");
const declarations = sdkInterfaceDeclarations.getExportedDeclarations()



rimraf.sync(sdkOutPath)
const sourceFile = project.createSourceFile(sdkOutPath);
sourceFile.addImportDeclaration({ namedImports: ["StrapiObject", "Strapi"], moduleSpecifier: "./strapi" })



const interfaceNames = Array.from(declarations.keys())
sourceFile.addImportDeclaration({ namedImports: interfaceNames, moduleSpecifier: "../@strapi-types" })
sourceFile.addExportDeclaration({ namedExports: interfaceNames})




// add enum
const keyNamesEnum = sourceFile.addEnum({ name: "KeyNames" })
declarations.forEach((value, interfaceDeclName) => {
    const keyName = interfaceDeclName.substr(1).toLowerCase()
    keyNamesEnum.addMember({ name: keyName })
})

sourceFile.addTypeAlias({ name: "KeyNamesType", type: "keyof typeof " + keyNamesEnum.getName() })
sourceFile.addTypeAlias({ name: "SDKKeyMap", type: "{ [index in KeyNamesType] : StrapiObject<any> }" })


const serverConfigClass = sourceFile.addClass({
    name: "ServerConfig",
    isExported: true,
    ctors: [{
        parameters: [{ name: "url" }],
        statements: [
            "this.strapiInstance = new Strapi(url);",
            " this.initModels();"
        ]
    }]
})

serverConfigClass.addJsDoc("auto generated from strapi cms")
serverConfigClass.addJsDoc("Example:")
serverConfigClass.addJsDoc('const { strapiInstance, models } = new ServerConfig("http://localhost:1337");')



serverConfigClass.addProperties([{
    name: 'strapiInstance',
    type: "Strapi",
    initializer: 'null',
    scope: Scope.Public
},
{
    name: 'models',
    type: "SDKKeyMap",
    scope: Scope.Public
}])



const methodDeclaration = serverConfigClass.addMethod({ name: "initModels" })

methodDeclaration.addStatements("this.models={} as SDKKeyMap")
interfaceNames.forEach(interfaceDeclName => {

    const keyName = interfaceDeclName.substr(1).toLowerCase()
    const singularName = interfaceDeclName.substr(1)

    methodDeclaration.addStatements(`this.models.${keyName}= new StrapiObject<${interfaceDeclName}>(this.strapiInstance, "${singularName}")`)
})

//constr.setBodyText('this.myProp = myProp');


sourceFile.formatText();
project.save();