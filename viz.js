// Faro - Plano Interactivo de Lotes (Dunas)
// Community Visualization para Looker Studio

var LOTE_PATHS = {
  "1": "M 1534 1737 L 1468 2043 L 1577 2043 L 1579 2026 L 1742 2043 L 1757 1936 L 1739 1928 L 1761 1908 L 1743 1898 L 1762 1901 L 1745 1885 L 1764 1887 L 1778 1780 L 1534 1737 z",
  "2": "M 1783 1781 L 1748 2043 L 1878 2043 L 1881 2026 L 1908 2043 L 1909 2026 L 1915 2043 L 1923 2026 L 1932 2043 L 2064 2043 L 2068 1954 L 2050 1943 L 2069 1934 L 2052 1901 L 2071 1902 L 2075 1808 L 1783 1781 z",
  "3": "M 2081 1808 L 2069 2043 L 2208 2043 L 2211 2026 L 2232 2043 L 2241 2026 L 2263 2043 L 2402 2043 L 2391 1809 L 2081 1808 z",
  "4": "M 2688 1782 L 2396 1808 L 2400 1903 L 2420 1915 L 2401 1918 L 2421 1938 L 2402 1937 L 2421 1948 L 2403 1952 L 2407 2043 L 2538 2043 L 2541 2026 L 2562 2043 L 2569 2026 L 2723 2043 L 2688 1782 z",
  "5": "M 2939 1740 L 2694 1782 L 2707 1885 L 2727 1888 L 2710 1908 L 2731 1918 L 2732 1938 L 2714 1934 L 2728 2043 L 2839 2043 L 2842 2026 L 2851 2043 L 2857 2026 L 2861 2043 L 2872 2026 L 2893 2043 L 3003 2043 L 2939 1740 z",
  "6": "M 2944 1738 L 2971 1867 L 2993 1877 L 2975 1886 L 2999 1906 L 2982 1919 L 3008 2043 L 3108 2043 L 3112 2026 L 3261 2043 L 3126 1689 L 2944 1738 z",
  "7": "M 3131 1686 L 3192 1848 L 3216 1857 L 3199 1866 L 3222 1874 L 3206 1884 L 3267 2043 L 3396 2026 L 3568 2043 L 3284 1611 L 3131 1686 z",
  "8": "M 3423 1506 L 3289 1609 L 3418 1805 L 3443 1808 L 3430 1823 L 3461 1835 L 3446 1847 L 3574 2040 L 3680 1856 L 3423 1506 z",
  "9": "M 3542 1375 L 3428 1502 L 3539 1654 L 3559 1649 L 3553 1673 L 3578 1675 L 3572 1699 L 3684 1851 L 3720 1759 L 3790 1667 L 3542 1375 z",
  "10": "M 3635 1227 L 3546 1371 L 3660 1506 L 3676 1495 L 3672 1520 L 3697 1520 L 3680 1529 L 3793 1662 L 3837 1557 L 3913 1456 L 3635 1227 z",
  "11": "M 3728 1067 L 3639 1222 L 3761 1323 L 3774 1309 L 3782 1340 L 3807 1336 L 3798 1353 L 3916 1451 L 3961 1373 L 3950 1357 L 3972 1354 L 3965 1331 L 3989 1325 L 4035 1244 L 3728 1067 z",
  "12": "M 3838 877 L 3731 1061 L 3866 1140 L 3878 1125 L 3876 1146 L 3887 1130 L 3880 1148 L 3904 1140 L 3895 1157 L 3909 1143 L 3904 1162 L 4039 1239 L 4076 1145 L 4145 1055 L 3838 877 z",
  "13": "M 3841 872 L 3975 950 L 3987 935 L 3986 956 L 3998 941 L 3989 958 L 4020 954 L 4013 972 L 4148 1050 L 4217 932 L 4205 917 L 4233 904 L 4220 891 L 4312 767 L 3911 733 L 3841 872 z",
  "14": "M 3439 574 L 3373 728 L 3511 808 L 3532 798 L 3535 822 L 3549 808 L 3556 834 L 3666 898 L 3694 891 L 3725 825 L 3672 745 L 3699 753 L 3680 670 L 3698 669 L 3681 658 L 3704 596 L 3439 574 z",
  "15": "M 3370 733 L 3290 937 L 3330 937 L 3517 1065 L 3598 1053 L 3685 915 L 3370 733 z",
  "16": "M 3141 548 L 3112 890 L 3156 877 L 3282 915 L 3301 831 L 3323 828 L 3307 817 L 3328 816 L 3314 801 L 3330 812 L 3392 669 L 3376 659 L 3395 662 L 3379 651 L 3402 646 L 3387 632 L 3433 573 L 3141 548 z",
  "17": "M 2891 527 L 2911 693 L 2930 692 L 2913 712 L 2935 735 L 2917 745 L 2936 903 L 3008 873 L 3106 890 L 3119 740 L 3102 723 L 3121 714 L 3104 695 L 3123 693 L 3135 547 L 2891 527 z",
  "18": "M 2676 508 L 2715 700 L 2735 703 L 2721 730 L 2743 741 L 2726 754 L 2765 943 L 2856 905 L 2931 904 L 2885 526 L 2676 508 z",
  "19": "M 2518 495 L 2571 752 L 2553 762 L 2581 975 L 2760 945 L 2670 508 L 2518 495 z",
  "20": "M 2375 483 L 2389 714 L 2409 724 L 2391 732 L 2411 758 L 2393 763 L 2407 992 L 2576 976 L 2513 495 L 2375 483 z",
  "21": "M 2235 471 L 2232 997 L 2401 993 L 2370 483 L 2235 471 z",
  "22": "M 2096 459 L 2057 991 L 2227 997 L 2228 759 L 2209 753 L 2228 751 L 2210 709 L 2228 708 L 2229 470 L 2096 459 z",
  "23": "M 1958 447 L 1883 972 L 2052 990 L 2069 750 L 2051 742 L 2072 721 L 2054 700 L 2074 694 L 2091 458 L 1958 447 z",
  "24": "M 1819 435 L 1711 942 L 1878 971 L 1911 741 L 1894 725 L 1913 727 L 1900 683 L 1919 684 L 1953 446 L 1819 435 z",
  "25": "M 1655 421 L 1516 892 L 1705 941 L 1754 714 L 1737 701 L 1760 683 L 1743 673 L 1763 671 L 1746 659 L 1765 662 L 1813 434 L 1655 421 z",
  "26": "M 1649 420 L 1479 406 L 1317 825 L 1511 890 L 1572 684 L 1560 657 L 1581 653 L 1568 629 L 1587 633 L 1649 420 z",
  "27": "M 1473 405 L 1255 388 L 1175 684 L 1194 687 L 1176 691 L 1197 708 L 1183 739 L 1227 789 L 1276 790 L 1312 823 L 1383 639 L 1372 615 L 1394 611 L 1379 597 L 1398 601 L 1383 587 L 1403 588 L 1473 405 z",
  "28": "M 1250 386 L 1048 369 L 908 721 L 942 714 L 989 753 L 1036 701 L 1004 708 L 1010 687 L 1084 667 L 1077 688 L 1157 710 L 1197 573 L 1180 562 L 1209 530 L 1192 520 L 1211 523 L 1250 386 z",
  "29": "M 906 726 L 811 965 L 996 1039 L 1010 1024 L 1026 1051 L 1048 1039 L 1044 1058 L 1232 1132 L 1282 1001 L 1265 939 L 1186 895 L 1035 891 L 972 827 L 987 758 L 906 726 z",
  "30": "M 809 971 L 748 1129 L 932 1202 L 956 1191 L 960 1213 L 984 1202 L 980 1221 L 1168 1294 L 1229 1137 L 809 971 z",
  "31": "M 744 1134 L 683 1292 L 867 1365 L 881 1350 L 895 1376 L 919 1365 L 915 1384 L 1103 1458 L 1165 1300 L 744 1134 z",
  "32": "M 679 1298 L 619 1455 L 800 1527 L 814 1512 L 823 1536 L 842 1523 L 853 1548 L 1037 1619 L 1100 1463 L 679 1298 z",
  "33": "M 534 1665 L 620 1680 L 620 1699 L 647 1691 L 742 1746 L 834 1754 L 946 1716 L 1033 1625 L 615 1460 L 534 1665 z",
  "34": "M 1305 1256 L 1228 1450 L 1241 1525 L 1518 1617 L 1582 1333 L 1305 1256 z",
  "35": "M 1588 1335 L 1524 1619 L 1628 1624 L 1641 1643 L 1664 1629 L 1696 1653 L 1813 1670 L 1830 1545 L 1816 1528 L 1834 1514 L 1851 1382 L 1588 1335 z",
  "36": "M 1857 1382 L 1819 1671 L 1988 1671 L 1992 1689 L 2112 1696 L 2117 1564 L 2101 1556 L 2118 1540 L 2123 1405 L 1857 1382 z",
  "37": "M 2396 1403 L 2128 1405 L 2117 1696 L 2224 1683 L 2237 1699 L 2241 1681 L 2411 1694 L 2396 1403 z",
  "38": "M 2668 1377 L 2402 1403 L 2408 1535 L 2425 1555 L 2410 1560 L 2417 1694 L 2499 1689 L 2515 1671 L 2535 1684 L 2554 1666 L 2594 1680 L 2709 1665 L 2668 1377 z",
  "39": "M 2936 1326 L 2673 1376 L 2692 1508 L 2709 1512 L 2715 1664 L 2797 1635 L 2818 1646 L 2822 1629 L 2834 1645 L 2834 1627 L 2843 1643 L 2864 1621 L 2876 1637 L 3003 1609 L 2936 1326 z",
  "40": "M 3164 1262 L 2941 1325 L 2969 1442 L 2991 1452 L 2974 1463 L 2998 1481 L 2981 1492 L 3009 1607 L 3114 1571 L 3147 1537 L 3162 1549 L 3158 1531 L 3170 1545 L 3172 1524 L 3198 1530 L 3319 1446 L 3164 1262 z",
  "41": "M 3252 1045 L 3169 1258 L 3229 1330 L 3256 1333 L 3243 1347 L 3276 1357 L 3262 1370 L 3324 1442 L 3468 1284 L 3487 1213 L 3450 1158 L 3252 1045 z",
  "42": "M 3247 1043 L 3081 1001 L 2872 1036 L 2902 1163 L 2920 1167 L 2939 1318 L 3038 1274 L 3048 1291 L 3056 1269 L 3073 1284 L 3163 1256 L 3195 1175 L 3180 1161 L 3207 1145 L 3196 1121 L 3215 1125 L 3247 1043 z",
  "43": "M 2866 1037 L 2631 1082 L 2649 1213 L 2666 1216 L 2672 1371 L 2783 1348 L 2779 1334 L 2809 1348 L 2810 1328 L 2818 1346 L 2820 1326 L 2833 1343 L 2934 1320 L 2866 1037 z",
  "44": "M 2625 1083 L 2386 1107 L 2410 1258 L 2394 1263 L 2401 1398 L 2484 1375 L 2506 1388 L 2509 1371 L 2517 1389 L 2524 1370 L 2529 1388 L 2542 1368 L 2547 1386 L 2552 1367 L 2562 1385 L 2667 1371 L 2625 1083 z",
  "45": "M 2381 1107 L 2140 1109 L 2129 1400 L 2222 1385 L 2237 1402 L 2239 1383 L 2245 1402 L 2253 1383 L 2257 1402 L 2272 1383 L 2275 1402 L 2281 1383 L 2286 1402 L 2396 1398 L 2381 1107 z",
  "46": "M 1895 1088 L 1857 1377 L 1950 1370 L 1964 1389 L 1972 1371 L 1980 1390 L 1985 1372 L 1984 1391 L 2004 1374 L 2003 1392 L 2016 1375 L 2020 1394 L 2123 1400 L 2128 1266 L 2113 1257 L 2130 1239 L 2135 1108 L 1895 1088 z",
  "47": "M 1654 1045 L 1589 1329 L 1678 1330 L 1693 1351 L 1702 1333 L 1703 1353 L 1717 1336 L 1714 1355 L 1734 1339 L 1731 1358 L 1746 1341 L 1748 1361 L 1852 1376 L 1869 1248 L 1854 1235 L 1873 1218 L 1890 1087 L 1654 1045 z",
  "48": "M 1427 1007 L 1388 1046 L 1307 1251 L 1403 1263 L 1417 1285 L 1440 1272 L 1447 1294 L 1469 1280 L 1469 1300 L 1584 1328 L 1613 1200 L 1599 1187 L 1619 1174 L 1648 1044 L 1520 1012 L 1530 1029 L 1480 1000 L 1427 1007 z"
};

var VIEWBOX = "0 0 4623 2541";

function normalizeLoteKey(raw) {
  // Acepta "Lote 12", "Lote12", "lote 12", "12" -> devuelve "12"
  if (raw === null || raw === undefined) return null;
  var s = String(raw).trim();
  var m = s.match(/(\d+)\s*$/);
  return m ? m[1] : null;
}

function colorForStatus(status, style) {
  if (!status) return style.colorDefault.value;
  var s = String(status).trim().toLowerCase();
  if (s === "disponible") return style.colorDisponible.value;
  if (s === "comprado") return style.colorComprado.value;
  if (s === "firmado") return style.colorFirmado.value;
  if (s === "reserva") return style.colorReserva.value;
  if (s.indexOf("interes") !== -1 || s.indexOf("interés") !== -1) return style.colorInteres.value;
  return style.colorDefault.value;
}

function buildStaticSvg() {
  var container = document.getElementById('plano-container');
  if (container) return; // ya existe, no recrear

  var root = document.getElementById('root');
  root.innerHTML =
    '<div id="plano-container">' +
      '<svg id="plano-svg" viewBox="' + VIEWBOX + '" xmlns="http://www.w3.org/2000/svg"></svg>' +
      '<div id="lote-tooltip"></div>' +
    '</div>';

  var svg = document.getElementById('plano-svg');
  Object.keys(LOTE_PATHS).forEach(function(num) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", LOTE_PATHS[num]);
    path.setAttribute("class", "lote-path");
    path.setAttribute("data-lote", num);
    path.setAttribute("fill", "#CCCCCC");
    svg.appendChild(path);
  });
}

function drawViz(data) {
  buildStaticSvg();

  var style = data.style;
  var tooltipEl = document.getElementById('lote-tooltip');

  // mapa lote -> fila de datos completa
  var rowsByLote = {};
  var tooltipFieldNames = (data.fields.tooltip || []).map(function(f) { return f.name; });

  data.tables.DEFAULT.forEach(function(row) {
    var loteRaw = row.lote[0];
    var statusRaw = row.status[0];
    var key = normalizeLoteKey(loteRaw);
    if (!key) return;
    rowsByLote[key] = {
      status: statusRaw,
      loteLabel: loteRaw,
      tooltip: row.tooltip || []
    };
  });

  // pintar cada lote segun el status recibido
  Object.keys(LOTE_PATHS).forEach(function(num) {
    var pathEl = document.querySelector('.lote-path[data-lote="' + num + '"]');
    if (!pathEl) return;
    var info = rowsByLote[num];
    var color = info ? colorForStatus(info.status, style) : style.colorDefault.value;
    pathEl.setAttribute("fill", color);
    pathEl.setAttribute("fill-opacity", "0.85");

    pathEl.onmousemove = function(ev) {
      if (!info) return;
      var html = '<b>' + info.loteLabel + '</b>Status: ' + info.status;
      info.tooltip.forEach(function(val, i) {
        var label = tooltipFieldNames[i] || ('Dato ' + (i + 1));
        html += '<br/>' + label + ': ' + val;
      });
      tooltipEl.innerHTML = html;
      tooltipEl.style.display = 'block';
      tooltipEl.style.left = (ev.clientX + 12) + 'px';
      tooltipEl.style.top = (ev.clientY + 12) + 'px';
    };
    pathEl.onmouseleave = function() {
      tooltipEl.style.display = 'none';
    };

    pathEl.onclick = function() {
      if (!info) return;
      dscc.sendInteraction(
        dscc.InteractionType.FILTER,
        { concepts: [data.fields.lote[0].id], values: [[info.loteLabel]] }
      );
    };
  });
}

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
