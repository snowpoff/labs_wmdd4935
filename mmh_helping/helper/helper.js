module.exports = function(context){
    let name = context.data.root.query.name;
    let suffix = context.data.root.query.suffix;
    return name + suffix;
}