(function () {

    class Control {
        private state: any;
    }

    interface SelectableControl extends Control {
        select(): void;
    }

    class ControlChild extends Control implements SelectableControl{
        select(): void {
            throw new Error("Method not implemented.");
        }
        
    }







})()