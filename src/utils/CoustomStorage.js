export const setLocalDataAsObject = (keyAsString, value) => {
    localStorage.setItem(keyAsString, JSON.stringify(value));
}

export const getLocalDataAsObject = (keyAsString) => {
    //  alert('getLocalDataAsObject=', keyAsString + '=' + localStorage.getItem(keyAsString))

    if (localStorage.getItem(keyAsString) != undefined) {
        var objData = undefined;
        try {
            var data = localStorage.getItem(keyAsString);
            if (typeof data !== "undefined" && data !== "undefined") {
                objData = JSON.parse(data);
            }

        } catch (error) {
            console.log(' error getLocalDataAsObject : ', error['message']);
        }


        return objData;
    }
}

export const clearLocalData = () => {

    try {
        localStorage.clear();
        

    } catch (error) {
        console.log('logout 2 error ::::: ', error);
        // Error retrieving data
    }

}