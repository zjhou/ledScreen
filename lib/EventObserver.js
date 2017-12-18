export default class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
    	if(!this.observers.includes(fn)){
            this.observers.push(fn);
	}
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(subscribe => subscribe !== fn);
    }
    unsubscribeAll() {
        this.observers = [];
    }
    broadcast(...data) {
        this.observers.forEach(subscriber => subscriber(...data));
    }
}
