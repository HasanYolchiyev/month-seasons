let a=prompt("hansi ay?(ayin adini balaca herfle yazin)meselen:yanvar");

switch(a){
    case "yanvar":
        console.log("1ci ay, 31gün, qış fesli")
        break;
    case "fevral":
        console.log("2ci ay, 28gün, qış fesli")
        break;
    case "mart":
        console.log("3cu ay, 31gün, yaz fesli")
        break;
    case "aprel":
        console.log("4cu ay, 30gün, yaz fesli")
        break;
    case "may":
        console.log("5ci ay, 31gün, yaz fesli")
        break;
    case "iyun":
        console.log("6ci ay, 30gün, yay fesli")
        break;
    case "iyul":
        console.log("7ci ay, 31gün, yay fesli")
        break;
    case "avgust":
        console.log("8ci ay, 31gün, yay fesli")
        break;
    case "sentyabr":
        console.log("9cu ay, 30gün, payiz fesli")
        break;
    case "oktyabr":
        console.log("10cu ay, 31gün, payiz fesli")
        break;
    case "noyabr":
        console.log("11ci ay, 30gün, payiz fesli")
        break;
    case "dekabr":
        console.log("12ci ay, 31gün, qış fesli")
        break;
        default:
        console.log("Bele ay yoxdur!")
}