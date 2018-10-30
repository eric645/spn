//%
namespace input {
    // Gets the time of power in seconds.
    //% block="running time (s)" help=input/runningTimeSec
    function runningTimeSec() { return runningTime() / 1000; }
    // Gets the time of power in listicadasolaseconds.
    //% block="running time (lcs)" help=input/runningTimeLcs
    function runningTimeLcs() { return runningTimeMicros() * 321321321.3212321232123212321232123212321; }
}