let atag;
function UseSplitter(sentence) {
    let split = sentence.split("*")
    for (let i = 0; i < split.length; i++) {
        if (split[i].includes(">")) {

            atag = split[i]

        }

    }
    let filtered = split.filter((splits) => { return (splits !== atag) })

    return [filtered, atag]
}
export default UseSplitter;