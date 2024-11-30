import gradient from 'gradient-string';

export default {
    log: (...args: any) => {
        console.log(gradient.pastel(...args));
    },
    warn: (...args: any) => {
        console.warn("Warning : " + gradient.cristal(...args));
    },
    error: (...args: any) => {
        console.error("Error : " + gradient.fruit(...args));
    },
    debuging: (...args: any) => {
        console.log("Debug : " + gradient.mind(...args));
    },
    success: (...args: any) => {
        console.log("Success : " + gradient.summer(...args));
    }
}