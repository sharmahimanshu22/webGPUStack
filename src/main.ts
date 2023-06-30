
(async () => {
        //retrieve <canvas> element

    if (module.hot) {
    // Accept hot update
        module.hot.accept();
    }

    var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("gpuCanvas");
    if (!canvas) {
        console.log("Failed to retrieve the <canvas> element");
        return;
    }
    
    if (navigator.gpu === undefined) {
        if(canvas) {
            //TODO:  check if there is something webgpu specific here
            canvas.setAttribute("style", "display:none;");
        return;
        }
    }

    const adapter : GPUAdapter = <GPUAdapter> await navigator.gpu?.requestAdapter();
    const device : GPUDevice = <GPUDevice> await adapter?.requestDevice();
    //const context : GPUCanvasContext = <GPUCanvasContext> canvas.getContext("webgpu");

    var ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.font = 'bold 88px Arial';
    ctx.fillStyle = 'red';

    var gpulimits : string = ""

    console.log(adapter.limits);
    
    
})();

