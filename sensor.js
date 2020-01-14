bmak = {
    ir: function() {
        bmak["start_ts"] = Date["now"]()
        bmak["kact"] = ""
        bmak["ke_cnt"] = 0
        bmak["ke_vel"] = 0
        bmak["mact"] = ""
        bmak["mme_cnt"] = 0
        bmak["mduce_cnt"] = 0
        bmak["me_vel"] = 0
        bmak["pact"] = ""
        bmak["pme_cnt"] = 0
        bmak["pduce_cnt"] = 0
        bmak["pe_vel"] = 0
        bmak["tact"] = ""
        bmak["tme_cnt"] = 0
        bmak["tduce_cnt"] = 0
        bmak["te_vel"] = 0
        bmak["doact"] = ""
        bmak["doe_cnt"] = 0
        bmak["doe_vel"] = 0
        bmak["dmact"] = ""
        bmak["dme_cnt"] = 0
        bmak["dme_vel"] = 0
        bmak["vcact"] = ""
        bmak["vc_cnt"] = 0
        bmak["aj_indx"] = 0
        bmak["aj_ss"] = 0
        bmak["aj_type"] = -1
        bmak["aj_indx_doact"] = 0
        bmak["aj_indx_dmact"] = 0
        bmak["aj_indx_tact"] = 0
        bmak["me_cnt"] = 0
        bmak["pe_cnt"] = 0
        bmak["te_cnt"] = 0
    },
    ab: function(a) {
        if (null == a) return -1;
        try {
            for (var t = 0, e = 0; e < a["length"]; e++) {
                var n = a["charCodeAt"](e);
                n < 128 && (t += n)
            }
            return t
        } catch (a) {
            return -2
        }
    },
    ff: function(a) {
        return String["fromCharCode"](a)
    },
    x2: function() {
        var a = bmak["ff"],
            t = a(98) + a(109) + a(97) + a(107) + a(46) + a(103) + a(101) + a(116);
        return t = t + a(95) + a(99) + a(102) + a(95), t = "return " + t + a(100) + a(97) + a(116) + a(101) + a(40) + a(41), t += ";", new Function(t)()
    },
    get_cf_date: function() {
        return Date["now"]()
    },
    //Set a as user-agent
    gd: function() {
        var a = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",//bmak["uar"](),
            t = "" + bmak["ab"](a),
            e = bmak["start_ts"] / 2,
            n = 1280,//window["screen"] ? window["screen"]["availWidth"] : -1,
            o = 800,//window["screen"] ? window["screen"]["availHeight"] : -1,
            m = 1280,//window["screen"] ? window["screen"]["width"] : -1,
            r = 800,//window["screen"] ? window["screen"]["height"] : -1,
            i = 1280,//window["innerWidth"] || document["body"]["clientWidth"],
            c = 689,//window["innerHeight"] || document["body"]["clientHeight"],
            b = 1280;//window["outerWidth"] || document["body"]["outerWidth"];
        bmak["z1"] = parseInt(bmak["start_ts"] / (4064256));
        var d = Math["random"](),
            k = parseInt(1e3 * d / 2),
            l = d + "";
        return l = a + ",uaend," + "12147" + "," + "20030107" + "," + "en" + "," + "Gecko" + "," + "3" + "," + "0" + "," + "0" + "," + "0" + "," + bmak["z1"] + "," + (bmak["x2"]() % 1e7) + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + "cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1"/*bmak["bd"]()*/ + "," + t + "," + l + "," + e + ",loc:"
    },
    cc: function(a) {
        var t = a % 4;
        2 == t && (t = 3);
        var e = 42 + t;
        return String["fromCharCode"](e)
    },
    to: function() {
        var a = bmak["x2"]() % 1e7;
        bmak["d3"] = a;
        for (var t = a, e = 0; e < 5; e++) {
            var n = parseInt(a / Math["pow"](10, e)) % 10,
                o = n + 1,
                m = "return a" + bmak["cc"](n) + o + ";";
            t = new Function("a", m)(t)
        }
        bmak["o9"] = t
    },
    od: function(a, t) {
        try {
            a = String(a), t = String(t);
            var e = [],
                n = t["length"];
            if (n > 0) {
                for (var o = 0; o < a["length"]; o++) {
                    var m = a["charCodeAt"](o),
                        r = a["charAt"](o),
                        i = t["charCodeAt"](o % n);
                    m = bmak["rir"](m, 47, 57, i), m != a["charCodeAt"](o) && (r = String["fromCharCode"](m)), e["push"](r)
                }
                if (e["length"] > 0) return e["join"]("")
            }
        } catch (a) {}
        return a
    },
    rir: function(a, t, e, n) {
        return a > t && a <= e && (a += n % (e - t)) > e && (a = a - e + t), a
    },
    init_f: function(cookie) {
        return [1,1,0,0,0,0,0,0, Math["random"](), bmak["start_ts"],-999999, parseInt(bmak["z1"]/23), 0, 0, parseInt(parseInt(bmak["z1"]/23)/6), 0, 0, bmak["get_cf_date"]() - bmak["start_ts"], 0, 0, cookie, bmak["ab"](cookie), -1, -1, 30261693]["join"](",")
    },
}

function generate_sensor(url, cookie) {
    let akamai_version = "1.45"

    bmak.ir()
    bmak["t_tst"] = bmak["get_cf_date"]()
    bmak["to"]()
    bmak["tst"] = bmak["get_cf_date"]() - bmak["t_tst"]
    o = "do_en"//window["DeviceOrientationEvent"] ? "do_en" : "do_dis",
    m = "dm_en"//window["DeviceMotionEvent"] ? "dm_en" : "dm_dis",
    r = "t_en"//window["TouchEvent"] ? "t_en" : "t_dis",
    i = o + "," + m + "," + r

    a = bmak["get_cf_date"]()

    bmak["sensor_data"] = akamai_version + "-1,2,-94,-100," + bmak["gd"]() + "-1,2,-94,-101," + i + "-1,2,-94,-105," +  "-1,2,-94,-108," + "-1,2,-94,-110," + "-1,2,-94,-117," + "-1,2,-94,-111," + "-1,2,-94,-109," + "-1,2,-94,-114," + "-1,2,-94,-103," + "-1,2,-94,-112" + url + "-1,2,-94,-115," + bmak["init_f"](cookie) + "-1,2,-94,-106," + "0," + "0" + "-1,2,-94,-119," + "-1" + "-1,2,-94,-122" + "0,0,0,0,1,0,0" + "-1,2,-94,-123," + "-1,2,-94,-124," + "-1,2,-94,-125,"
    w = bmak["ab"](bmak["sensor_data"])
    C = Math["floor"](bmak["get_cf_date"]() / 36e5)
    j = bmak["get_cf_date"]()
    result = "7a74G7m23Vrp0o5c"+ bmak["od"](C , "7a74G7m23Vrp0o5c") + bmak["sensor_data"] + "-1,2,-94,-70," + "-1" + "-1,2,-94,-80," + "94" + "-1,2,-94,-116," + bmak["o9"] + "-1,2,-94,-118" + w + "-1,2,-94,-121," +";" + (bmak["get_cf_date"]() - a) + ";" + bmak["tst"] + ";" + (bmak["get_cf_date"]() - j) //useless, bmak["sd_debug"](",s1:" + bmak["sensor_data"]["slice"](0, 10))
    
    console.log(result)
}



cookie = "DC9703FCA25BFF835F88793003C68ECF~-1~YAAQzwwQYFOqz1hvAQAALuDvkQPAgFnLlNqmFaqBiXhrcC9jORxRpDhfbyYSRl/a8hhi4L2+X2hZIjAjC6zzM1MeGFsxAZdE6EBrMPaFrSegUofiTOd9ZG+pDlF1jY/2ApnplMh6dR2NcA+TX7SD8Fy+qs6Wj9UtQNJh/Zw7rmhcKHKqsIUT2JxZ+cvtKgfOxMIYlT+sv3uJ0okj5osAwuo4X7O/kF8cgjalwMuODt7O+My2+2ipeKfUr8mAWiedofugPPbKByfjjM7+8uncobnWkxPgc9VELVpgMyGJlKkvx+9lgkSHSUoC1w==~-1~-1~-1"
url = "https://www.eastbay.com/product/nike-air-max-90-mens/J1285019.html"
number = 0
while(number<1) {
    generate_sensor(url, cookie)
    number+=1
}




