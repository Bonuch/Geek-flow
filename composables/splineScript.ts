export const splineScript = () => {
    let splinetoolScript = document.getElementsByClassName('spline-script')
    if (splinetoolScript.length <= 0) {
        // @ts-ignore
        splinetoolScript = document.createElement('script')
        // @ts-ignore
        splinetoolScript.setAttribute('src', '/js/spline-viewer.js')
        // @ts-ignore
        splinetoolScript.setAttribute('type', 'module')
        // @ts-ignore
        splinetoolScript.classList.add('spline-script')
        // @ts-ignore
        document.body.appendChild(splinetoolScript)
    }
}