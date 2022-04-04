class UAJ { 

    exactPosition (elem ) {
        elem = document.querySelector(elem);
        if( elem ===  null ) {
            return { x:0, y:0, found: false };
        }

        const y = elem.getBoundingClientRect().top + window.pageYOffset;
        const x = elem.getBoundingClientRect().left + window.pageXOffset;

        return { x: x, y: y, found: true };
    }

    last (array ) { 
        if ( !Array.isArray(array) ) {
            return { found:false };
        }

        const len = array.length;
        return { found: true, value: array[len-1] }; 
    }

    eventListener (event, elemSelector, cb, parent = document, param, repeat = 0 ) {
        let counter = 0;
        parent.addEventListener(event, (event ) => {
            if(event.target.matches(elemSelector )) {
                if (repeat <= 0) {
                    return cb(event, param);
                }
                if(counter < repeat ) {
                    counter ++;
                    return cb(event, param);
                }
            }
        })
    }

    qs (selector, parent = document) {
        try {
            const elem =  parent.querySelector(selector);
            return {found:true, elem:elem};
        }catch (e) {
            return {found:false, err:e};
        }
    }

    qsa (selector, parent = document) {
        try {
            const elem = [...parent.querySelectorAll(selector)];
            return {found: true, elem: elem};
        } catch (e) {
            return {found: false, err:e};
        }
    }

    
}

window.uaj =  new UAJ();
window.$$ = window.uaj;