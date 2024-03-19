class GlobalVar {
    private isLogged: boolean;

    constructor(){
        this.isLogged = false;
    }


    setLogged (isOrNo: boolean) {
        this.isLogged = isOrNo;
    }

    getIsLogged () {
        return this.isLogged
    }
}

export const globalVar = new GlobalVar()