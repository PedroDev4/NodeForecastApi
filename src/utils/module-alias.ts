import path from "path";
import moduleAlias from "module-alias"

// Config do module-alias para imports personalizados

const files = path.resolve(__dirname, "../..");

moduleAlias.addAliases({
    "@src": path.join(files, 'src'),
    "@test": path.join(files, 'test')
});