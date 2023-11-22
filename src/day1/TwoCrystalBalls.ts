export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpSize = Math.floor(Math.sqrt(breaks.length))
    let curIdx = 0;
    while(curIdx < breaks.length){
        if((breaks[curIdx + jmpSize] === true) || (curIdx+jmpSize) >= breaks.length) {
            for (let i = curIdx; i < curIdx+jmpSize; i++){
                if(breaks[i] === true){
                    return i;
                }
            }
        }
        curIdx += jmpSize
    }
    return -1;


}