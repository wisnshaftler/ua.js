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
            return new Error("Not an array");
        }
        const len = array.length;
        return array[len-1]; 
    }

    eventLis (event, elemSelector, cb, parent = document, param, repeat = 0 ) {
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
        return parent.querySelector(selector);
    }

    qsa (selector, parent = document) {
    }

    byid (selector, parent = document) {
        return parent.getElementById(selector);
    }
    
    bycls (selector, parent = document) {
        return [...parent.getElementsByClassName(selector)];
    }

    byname (selector, parent = document) {
        return [...parent.getElementsByName(selector)];
    }

    bytag (selector, parent = document) {
        return [...parent.getElementsByTagName(selector)];
    }

}

window.uaj =  new UAJ();
window.$$ = window.uaj;
