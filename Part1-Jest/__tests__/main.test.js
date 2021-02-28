const formatVolumeIconPath = require('../assets/scripts/main');
const main = require('../assets/scripts/main');

describe('formsValueIcon check', () => {
    test(' volume > 66 -> icon lvl 3', () =>{
        expect(formatVolumeIconPath(90)).toBe(`./assets/media/icons/volume-level-3.svg`)        
    });

    test('33 < volume < 66 -> icon lvl 2', () =>{
        expect(formatVolumeIconPath(55)).toBe(`./assets/media/icons/volume-level-2.svg`)        
    });

    test(' 0 < volume < 33', () =>{
        expect(formatVolumeIconPath(25)).toBe(`./assets/media/icons/volume-level-1.svg`)        
    });

    test(' 0 <= volume ', () =>{
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`)        
    })

})