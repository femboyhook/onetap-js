var username = "000";
var usernames = new Array();
var heavy_cache = UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"])
var scout_cache = UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"])
var awp_cache = UI.GetValue(["Rage", "Target", "AWP", "Minimum damage"])
var auto_cache = UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"])
var weapon_name_ds = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

var heavy_cache_ds = UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"])
var scout_cache_ds = UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"])
var auto_cache_ds = UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"])

UI.AddSubTab(["Visuals", "SUBTAB_MGR"], "wishcord")
var path = ["Visuals", "wishcord", "wishcord"];
var kpath = ["Config", "Scripts", "Keys", "JS Keybinds"];
usernames.push("weird");
usernames.push("kartell23");
usernames.push("k1m");
usernames.push("emotionless");
usernames.push("Twilight");
usernames.push("EternalEnVy1337");

if (Cheat.GetUsername() == "weird") {
    username = "wishaww";
} else if (Cheat.GetUsername() == "kartell23") {
    username = "Zuru";
} else if (Cheat.GetUsername() == "k1m") {
    username = "k1m1337";
} else if (Cheat.GetUsername() == "emotionless") {
    username = "Korper";
} else if (Cheat.GetUsername() == "Twilight") {
    username = "Twilight";
}
else if (Cheat.GetUsername() == "EternalEnVy1337") {
    username = "shygirl18";
}


var size = Render.GetScreenSize();
size = [size[0], size[1] - 60];
var nlogs = new Array();
var speed = 0;
function draw_arc1(a,n,o,r,t,h,M,c){M=360/M;for(var e=t;e<t+h;e+=M){var s=e*Math.PI/180,P=(e+M)*Math.PI/180,d=Math.cos(s),i=Math.sin(s),f=Math.cos(P),g=Math.sin(P),l=a+d*r,v=n+i*r,y=a+d*o,I=n+i*o,R=a+f*r,u=n+g*r,w=a+f*o,_=n+g*o;Render.Polygon([[y,I],[w,_],[l,v]],c),Render.Polygon([[l,v],[w,_],[R,u]],c)}};
function notify(e, i, r) {
    var n = Render.AddFont("Verdana.ttf", 10, 400),
        d = Render. TextSize(e, n)[0],
        s = Math.floor(size[0] / 2) - 4 - Math.floor(d / 2);
    draw_arc1(Math.floor(s) - 1, size[1] - i + 9, 11, 0, 90, 180, 60, [56, 56, 57, 255 * r]), draw_arc1(Math.floor(s) + Math.floor(d) + 8 - 2, size[1] - i + 9, 11, 0, 270, 179, 60, [56, 56, 57, 255 * r]), Render.FilledRect(Math.floor(s - 0.5), size[1] - i - 2, d + 8, 23, [56, 56, 57, 255 * r]), Render.String(size[0] / 2 + 1, size[1] - i + 4, 1, e, [0, 0, 0, 220 * r], n), Render.String(size[0] / 2, size[1] - i + 3, 1, e, [255, 255, 255, 220 * r], n)
};
nlogs.push(["Wishcord 2.1.0 Framework for Counter-Strike: Global Offensive successfully loaded", Globals.Curtime(), 10, 0])
nlogs.push(["Welcome back, " + username + ((Cheat.GetUsername() == "weird" || Cheat.GetUsername() == "emotionless" || Cheat.GetUsername() == "kartell23"  || Cheat.GetUsername() == "k1m" || Cheat.GetUsername() == "EternalEnVy1337") ? " [debug]." : " [release]."), Globals.Curtime(), 6, 0])

UI.AddColorPicker(path, "Watermark");
var color = UI.GetColor(["Visuals", "wishcord", "wishcord", "Watermark"]);
if (color == [255, 255, 255, 255]) {
    UI.SetColor(["Visuals", "wishcord", "wishcord", "Watermark"], [89, 119, 239, 65]);
}

function isActive(a) {
    return UI.GetValue(["Config", "Scripts", "Keys", "JS Keybinds", a])
}

function setValue(cat, value) {
    UI.SetValue(["Rage", "Target", cat, "Minimum damage"], value)
}

function isHeavyPistol(name) {
    if (name == "r8 revolver" || name == "desert eagle") {
        return true
    }
}

function isAutoSniper(name) {
    if (name == "scar 20" || weapon_name == "g3sg1") {
        return true
    }
}

var restore_values = false
UI.AddHotkey(kpath, "Delay shot", "Delay shot")
UI.AddHotkey(kpath, "Minimum damage override", "Minimum damage override")
UI.AddSliderInt(path, "Heavy Pistol Mindmg", 0, 130)
UI.AddSliderInt(path, "Scout Mindmg", 0, 130)
UI.AddSliderInt(path, "AWP Mindmg", 0, 130)
UI.AddSliderInt(path, "Auto Mindmg", 0, 130)
var restore_values_ds = false

function delay_shot() {
    if (!isActive("Delay shot")) {
        if (restore_values_ds) {
            restore_values_ds = false;

            setValue("Revolver", heavy_cache_ds)
            setValue("SSG08", scout_cache_ds)
            setValue("G3SG1", auto_cache_ds)
            setValue("SCAR20", auto_cache_ds)
        } else {
            heavy_cache_ds = UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"])
            scout_cache_ds = UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"])
            auto_cache_ds = UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"])
        }

        return;
    }

    restore_values_ds = true;

    heavy_value_ds = 100
    scout_value_ds = 100
    auto_value_ds = 100
    weapon_name_ds = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

    if (isHeavyPistol(weapon_name_ds)) {
        setValue("Revolver", heavy_value_ds)
    }

    else if (weapon_name_ds == "ssg 08") {
        setValue("SSG08", scout_value_ds)
    }

    else if (isAutoSniper(weapon_name_ds)) {
        setValue("G3SG1", auto_value_ds)
        setValue("SCAR20", auto_value_ds)
    }
}

function override_mindmg() {
    if (!isActive("Minimum damage override")) {
        if (restore_values) {
            restore_values = false;

            setValue("Revolver", heavy_cache)
            setValue("SSG08", scout_cache)
            setValue("AWP", awp_cache)
            setValue("G3SG1", auto_cache)
            setValue("SCAR20", auto_cache)
        } else {
            heavy_cache = UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"])
            scout_cache = UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"])
            awp_cache = UI.GetValue(["Rage", "Target", "AWP", "Minimum damage"])
            auto_cache = UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"])
        }

        return;
    }

    restore_values = true;

    heavy_value = UI.GetValue(["Visuals", "wishcord", "wishcord", "Heavy Pistol Mindmg"])
    scout_value = UI.GetValue(["Visuals", "wishcord", "wishcord", "Scout Mindmg"])
    awp_value = UI.GetValue(["Visuals", "wishcord", "wishcord", "AWP Mindmg"])
    auto_value = UI.GetValue(["Visuals", "wishcord", "wishcord", "Auto Mindmg"])
    weapon_name = Entity.GetName(Entity.GetWeapon(Entity.GetLocalPlayer()))

    if (isHeavyPistol(weapon_name)) {
        setValue("Revolver", heavy_value)
    }

    if (weapon_name == "ssg 08") {
        setValue("SSG08", scout_value)
    }

    if (weapon_name == "awp") {
        setValue("AWP", awp_value)
    }

    if (isAutoSniper(weapon_name)) {
        setValue("G3SG1", auto_value)
        setValue("SCAR20", auto_value)
    }
}

function onCreateMove() {
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) 
    delay_shot();
    if (!isActive("Delay shot")) {
        override_mindmg();
    }
}
Global.RegisterCallback("CreateMove", "onCreateMove")

function draw() {
    if (usernames.indexOf(Cheat.GetUsername()) !== -1) {
        if (!World.GetServerString()) return;
        var today = new Date();
        var hours1 = today.getHours();
        var minutes1 = today.getMinutes();
        var seconds1 = today.getSeconds();
        var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
        var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
        var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds();
        color = UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"]);
        var font = Render.AddFont("Verdana.ttf", 10, 100);
        var text = "wishcord " + ((Cheat.GetUsername() == "weird" || Cheat.GetUsername() == "emotionless") ? "[debug]" : "[release]") + " | " + username + " | delay: " + Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString() + "ms | " + Globals.Tickrate().toString() + "tick | " + hours + minutes + seconds;
        var h = 18;
        var w = Render. TextSize(text, font)[0] + 8;
        var x = Global.GetScreenSize()[0];
        var y = 10;
        x = x - w - 10;
        Render.FilledRect(x, y, w, 2, [color[0], color[1], color[2], 255]);
        Render.FilledRect(x, y+2, w, h, [17, 17, 17, color[3]]);
        Render.String(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
        Render.String(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);
    } else {
        Render.FilledRect(0, 0, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [0, 180, 255, 255]);
        Render.FilledRect(0, Global.GetScreenSize()[1] / 2, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [255, 255, 0, 255]);
    }
}
Cheat.RegisterCallback("Draw", "draw");

//Spectator List

const x2 = UI.AddSliderInt(path, "window_x", 0, Global.GetScreenSize()[0]);
const y2 = UI.AddSliderInt(path, "window_y", 0, Global.GetScreenSize()[1]);

function get_spectators() {
    var specs = [];
    const players = Entity.GetPlayers();

    for (i = 0; i < players.length; i++) {
        const cur = players[i];

        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")

            if (obs === Entity.GetLocalPlayer()) {
                const name = Entity.GetName(cur);
                specs.push(name);
            }
        }
    }

    return specs;
}

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function main() {
    if (usernames.indexOf(Cheat.GetUsername()) !== -1) {
        const x = UI.GetValue( ["Visuals", "wishcord", "wishcord", "window_x"]),
            y = UI.GetValue( ["Visuals", "wishcord", "wishcord", "window_y"]);
        colorspec = UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"]);
        var font = Render.AddFont("Verdana.ttf", 10, 100);
        const names = get_spectators();
        /*Render.Rect(x - 1, y - 1, 202, 61 + 15 * (names.length - 1), [2, 2, 2, 100]);
        Render.FilledRect(x, y, 200, 60 + 15 * (names.length - 1), [55, 55, 55, 200]);
        Render.Rect(x + 5, y + 5, 190, 50 + 15 * (names.length - 1), [2, 2, 2, 100]);
        Render.FilledRect(x + 5, y + 5, 190, 50 + 15 * (names.length - 1), [25, 25, 25, 200]);
        Render.FilledRect(x + 9, y + 25, 181, 3, [255, 255, 255, 255]);
        Render.String(x + 100, y + 10, 1, "spectators (" + names.length + ")", [200, 200, 200, 200], 3);*/
        if (names.length > 0 || UI.IsMenuOpen()) {
            Render.FilledRect(x + 5, y + 3, 200, 2, [colorspec[0], colorspec[1], colorspec[2], 255]);
            Render.FilledRect(x + 5, y + 5, 200, 18, [17, 17, 17, 255]);
            Render.String(x + 100 - (Render. TextSize("Spectators", font)[0] / 2) + 7, y + 9, 0, "Spectators", [0, 0, 0, 180], font);
            Render.String(x + 100 - (Render. TextSize("Spectators", font)[0] / 2) + 6, y + 8, 0, "Spectators", [255, 255, 255, 255], font);
            Render.FilledRect(x + 5, y + 23, 200, 18 * names.length, [17, 17, 17, colorspec[3]]);
            for (i = 0; i < names.length; i++) {
                Render.String(x + 107 - (Render. TextSize(names[i], font)[0] / 2), y + 26 + 18 * i, 0, names[i], [0, 0, 0, 180], font);
                Render.String(x + 106 - (Render. TextSize(names[i], font)[0] / 2), y + 25 + 18 * i, 0, names[i], [255, 255, 255, 255], font);
            }
        }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + 200, y + 30)) {
                UI.SetValue( ["Visuals", "wishcord", "wishcord", "window_x"], mouse_pos[0] - 100);
                UI.SetValue( ["Visuals", "wishcord", "wishcord", "window_y"], mouse_pos[1] - 20);
            }
        }
    } else {
        Render.FilledRect(0, 0, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [0, 180, 255, 255]);
        Render.FilledRect(0, Global.GetScreenSize()[1] / 2, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [255, 255, 0, 255]);
    }
}
Global.RegisterCallback("Draw", "main")

const x20 = UI.AddSliderInt(path, "window_123x", 0, Global.GetScreenSize()[0]);
const y20 = UI.AddSliderInt(path, "window_123y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var choked = 0;
var choked_prev = 0;
var choked_max = 0;
var choked_prev_cmd = 0;
var tickcount = 0;
var tickcount_prev = 0;
var brklc = false;
var last_origin = [0, 0, 0];
var last_origin_sqr = 0;
var origin_sqr = 0;
function cm12321() {
    choked_prev = choked;
    choked = Globals.ChokedCommands();
    if (choked > choked_max)
        choked_max = choked;
    else if (choked == 0 && choked_prev != 0)
        choked_max = choked_prev;
    else if (choked == 0 && choked_prev_cmd == 0)
        choked_max = 0;
    
    tickcount = Globals.Tickcount();
    if (tickcount != tickcount_prev) {
        choked_prev_cmd = choked_prev_cmd;
        tickcount_prev = tickcount;
    }
}

Global.RegisterCallback("CreateMove", "cm12321");
var lcalpha = 0;
var lcdelta = 0;
var glalpha = 0;
var showednotify = false;
var lastshowed = Globals.Curtime();
function mai12321() {
    if (usernames.indexOf(Cheat.GetUsername()) !== -1) {
        if (!World.GetServerString()) return;
        const x = UI.GetValue( ["Visuals", "wishcord", "wishcord", "window_123x"]),
              y = UI.GetValue( ["Visuals", "wishcord", "wishcord", "window_123y"]);


		
        var font = Render.AddFont("Verdana.ttf", 10, 100);
        if (Globals.ChokedCommands() == 0) {
            if (last_origin != Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin")) {
                last_origin_sqr = last_origin[0] * last_origin[0] + last_origin[1] * last_origin[1];
                origin_sqr = Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin")[0] * Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin")[0] + Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin")[1] * Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin")[1];
                brklc = false;
                if ((last_origin_sqr - origin_sqr) > 4096 || (last_origin_sqr - origin_sqr) < -4096) {
					brklc = true;
				}
                last_origin = Entity.GetProp(Entity.GetLocalPlayer(),"DT_BasePlayer", "m_vecOrigin");
            }
        }

        var velocity = Entity.GetProp( Entity.GetLocalPlayer(), "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
        
        var delta = (last_origin_sqr - origin_sqr);
        if (delta < 0)
            delta *= -1;

		var origdelta = delta;

        if (delta < 1024)
            delta = Math.random() * 4096;
        var text = "LC | choke: "+choked_max.toString()+" | adaptive: "+ (brklc ? "true" : "false");
        var btext = "LC | choke: "+choked_max.toString()+" | adaptive: "+ (brklc ? "true" : "false") +" | dst: ";

        if (speed > 260) {
			if (showednotify == false && lcdelta > 4096 && lastshowed + 3 < Globals.Curtime()) {
						lastshowed = Globals.Curtime();
						showednotify = true;
						if (lcdelta > 8192) {
							nlogs.push(["Lag compensation delta above 8192. Overriding cheat command prediction... Current delta: " + Math.floor(lcdelta).toString(), Globals.Curtime(), 6, 0])
						}
						else if (lcdelta > 4096) {
							nlogs.push(["Lag compensation delta above 4096. Skipping choked ticks processing... Current delta: " + Math.floor(lcdelta).toString(), Globals.Curtime(), 6, 0])
						}
			}
			var w = Render. TextSize(text + " | dst:         ", font)[0] + 8;
		}
            
        else {
			var w = Render. TextSize(text, font)[0] + 8;
			showednotify = false;
		}
            

        if ((speed > 220 || delta > 100) && choked_max > 5 ) {
			
            if (glalpha < 1)
                glalpha += Globals.Frametime() * 8;
        }
        else {
            if (glalpha > 0)
				glalpha -= Globals.Frametime() * 8;
        }

            Render.FilledRect(x - w, y, w, 2, [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], Math.max(Math.min(glalpha * 255, 255), 0)]);
            Render.FilledRect(x - w, y + 2, w, 18, [17, 17, 17, Math.min(Math.max(Math.min(glalpha * 255, 255), 0), UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[3])]);
            Render.String(x + 5 - w, y + 5, 0, text, [0, 0, 0, Math.max(Math.min(glalpha * 255, 180), 0)], font);
            Render.String(x + 4 - w, y + 4, 0, text, [255, 255, 255, Math.max(Math.min(glalpha * 255, 255), 0)], font);

            

            if (delta > lcdelta) {
                lcdelta += 128;
            }
            else if (delta < lcdelta) {
                lcdelta -= 64;
            }

            if (speed > 260) {
                if (lcalpha < 1)
                lcalpha += Globals.Frametime() * 8;
                lcalpha = Math.min(lcalpha, glalpha);
                Render.String(x + 5 - w + Render. TextSize(text, font)[0], y + 5, 0, " | dst: ", [0, 0, 0, Math.max(Math.min(lcalpha * 255, 255), 0)], font);
                Render.String(x + 4 - w + Render. TextSize(text, font)[0], y + 4, 0, " | dst: ", [255, 255, 255, Math.max(Math.min(lcalpha * 255, 255), 0)], font);   
                Render.FilledRect(x - w + Render. TextSize(btext, font)[0] + 4, y + 8, Math.min((Render. TextSize("        ", font)[0] / 2) * lcdelta / 4096, Render. TextSize("        ", font)[0]), 6, [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], Math.max(Math.min(lcalpha * 255, 255), 0)]);
            }
            else {
                if (lcalpha > 0)
                lcalpha -= Globals.Frametime() * 8;
                lcalpha = Math.min(lcalpha, glalpha);
            }
        if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
                UI.SetValue( ["Visuals", "wishcord", "wishcord", "window_123x"], mouse_pos[0] - 100);
                UI.SetValue( ["Visuals", "wishcord", "wishcord", "window_123y"], mouse_pos[1] - 20);
            }
        }
    } else {
        Render.FilledRect(0, 0, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [0, 180, 255, 255]);
        Render.FilledRect(0, Global.GetScreenSize()[1] / 2, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [255, 255, 0, 255]);
    }
}
Global.RegisterCallback("Draw", "mai12321")


//Hotkeys
var kbalpha = 0;
var latest_item_width = 0;
var item_width = 0;
var kb = new Array();
var kbh = new Array();
var path = ["Visuals", "wishcord", "wishcord"];
UI.AddSliderInt(path, "hk_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt(path, "hk_y", 0, Global.GetScreenSize()[1]);
function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
function state(i) {
    switch (i) {
        case 'Hold':
            return "[holding]";
            break;
        case 'Toggle':
            return "[toggled]";
            break;
        case 'Always':
            return "[enabled]";
            break;
        case '[~]':
            return "[~]";
            break;
    }
}
function namekb(s) {
    switch (s) {
        case 'Hide shots':
            return "On shot anti-aim";
            break;
        case 'Auto peek':
            return "Quick peek assist";
            break;
        case 'Fake duck':
             return "Duck peek assist";
             break;
        case 'Slow walk':
             return "Slow motion";
             break;
        case 'Edge jump':
             return "Jump at edge";
             break;
        case 'Force safe point':
             return "Safe point";
             break;
        case 'Minimum damage override':
            return "Damage override";
        default:
            return s;
            break;
    }
}
function hotkeys() {
    if (!World.GetServerString()) return;
    var x = UI.GetValue( ["Visuals", "wishcord", "wishcord", "hk_x"]),
        y = UI.GetValue( ["Visuals", "wishcord", "wishcord", "hk_y"]);        

    var font = Render.AddFont("Verdana.ttf", 10, 100);
    if (UI.IsMenuOpen()) 
    {
        if (kb.indexOf("Menu key") == -1) {
            kb.push("Menu key");
            kbh.push(["[~]", 0, "scam"]);
        }  
    }
    if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) 
    {
        if (kb.indexOf("Double tap") == -1) {
            kb.push("Double tap");
            kbh.push([UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]), 0, ["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]]);
        }  
    }

    if (UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"])) 
    {
        if (kb.indexOf("Hide shots") == -1) {
            kb.push("Hide shots");
            kbh.push([UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]), 0, ["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]]);
        }  
    }

    if (UI.GetValue(["Rage", "General", "General", "Key assignment", "Force safe point"])) 
    {
        if (kb.indexOf("Force safe point") == -1) {
            kb.push("Force safe point");
            kbh.push([UI.GetHotkeyState(["Rage", "General", "General", "Key assignment", "Force safe point"]), 0, ["Rage", "General", "General", "Key assignment", "Force safe point"]]);
        }  
    }

    if (UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Auto peek"])) 
    {
        if (kb.indexOf("Auto peek") == -1) {
            kb.push("Auto peek");
            kbh.push([UI.GetHotkeyState(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]), 0, ["Misc.", "Keys", "General", "Key assignment", "Auto peek"]]);
        }  
    }
    
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"])) 
    {
        if (kb.indexOf("Fake duck") == -1) {
            kb.push("Fake duck");
            kbh.push([UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]), 0, ["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]]);
        }  
    }

    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) 
    {
        if (kb.indexOf("Slow walk") == -1) {
            kb.push("Slow walk");
            kbh.push([UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]), 0, ["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]]);
        }  
    }

    if (UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Edge jump"])) 
    {
        if (kb.indexOf("Edge jump") == -1) {
            kb.push("Edge jump");
            kbh.push([UI.GetHotkeyState(["Misc.", "Keys", "General", "Key assignment", "Edge jump"]), 0, ["Misc.", "Keys", "General", "Key assignment", "Edge jump"]]);
        }  
    }

    if (UI.GetValue(["Rage", "General", "General", "Key assignment", "Force body aim"])) 
    {
        if (kb.indexOf("Force body aim") == -1) {
            kb.push("Force body aim");
            kbh.push([UI.GetHotkeyState(["Rage", "General", "General", "Key assignment", "Force body aim"]), 0, ["Rage", "General", "General", "Key assignment", "Force body aim"]]);
        }  
    }

    if (UI.GetValue(["Config", "Scripts", "Keys", "JS Keybinds", "Minimum damage override"])) 
    {
        if (kb.indexOf("Minimum damage override") == -1) {
            kb.push("Minimum damage override");
            kbh.push([UI.GetHotkeyState(["Config", "Scripts", "Keys", "JS Keybinds", "Minimum damage override"]), 0, ["Config", "Scripts", "Keys", "JS Keybinds", "Minimum damage override"]]);
        }  
    }

    var fr = 8 * 255 * Globals.Frametime();
    var color = UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"]);
    if (UI.IsMenuOpen() || kb.length > 0) {
        if ((kbalpha + fr) <= 255)
            kbalpha += fr;
        else
            kbalpha = 255;
    }
    else {
        if ((kbalpha - fr) >= 0)
            kbalpha -= fr;
        else
            kbalpha = 0;
    }
    for (i = 0; i < kb.length; i++) {
        if (Render.TextSize(namekb(kb[i]), font)[0] > latest_item_width) {
            latest_item_width = Render.TextSize(namekb(kb[i]), font)[0];
            item_width = latest_item_width;
        }
    }

    w = item_width + 80;

    Render.FilledRect(x, y, w, 2, [color[0], color[1], color[2], kbalpha]);
    Render.FilledRect(x, y+2, w, 20, [17, 17, 17, Math.min(color[3], kbalpha )]);
    Render.String(x+w/2+1, y+6, 1, "keybinds", [0, 0, 0, kbalpha], font);
    Render.String(x+w/2, y+5, 1, "keybinds", [255, 255, 255, kbalpha], font);

    for (i = 0; i < kb.length; i++) {
        if (kbh[i][2] == "scam") {
            if (UI.IsMenuOpen()) {
                if ((kbh[i][1] + fr) <= 255)
                    kbh[i][1] += fr;
                else
                    kbh[i][1] = 255;
            }
            else {
                if ((kbh[i][1] - fr) >= 0)
                    kbh[i][1] -= fr;
                else {
                    kb.splice(i);
                    kbh.splice(i);
                    latest_item_width = 0;
                    continue;
                }
            }
        }
        else {
            if (UI.GetValue(kbh[i][2])) {
                if ((kbh[i][1] + fr) <= 255)
                    kbh[i][1] += fr;
                else
                    kbh[i][1] = 255;
            }
            else {
                if ((kbh[i][1] - fr) >= 0)
                    kbh[i][1] -= fr;
                else {
                    kb.splice(i);
                    kbh.splice(i);
                    latest_item_width = 0;
                    continue;
                }
            }
        }
        Render.String(x+3, y+24+(18*i), 0, namekb(kb[i]), [0, 0, 0, Math.min(kbalpha, kbh[i][1])], font);
        Render.String(x+2, y+23+(18*i), 0, namekb(kb[i]), [255, 255, 255, Math.min(kbalpha, kbh[i][1])], font);
        Render.String(x+w-2-Render.TextSize(state(kbh[i][0]), font)[0], y+24+(18*i), 0, state(kbh[i][0]), [0, 0, 0, Math.min(kbalpha, kbh[i][1])], font);
        Render.String(x+w-3-Render.TextSize(state(kbh[i][0]), font)[0], y+23+(18*i), 0, state(kbh[i][0]), [255, 255, 255, Math.min(kbalpha, kbh[i][1])], font);
    }

    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 22)) {
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "hk_x"], mouse_pos[0] - w/2);
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "hk_y"], mouse_pos[1] - 11);
        }
    }
}
Cheat.RegisterCallback("Draw", "hotkeys");

UI.AddSliderInt(path, "Antiaim_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt(path, "Antiaim_y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function draw_arc(x, y, radius, start_angle, percent, thickness, color) {
    if (usernames.indexOf(Cheat.GetUsername()) !== -1) {
        var precision = (2 * Math.PI) / 10;
        var step = Math.PI / 180;
        var inner = radius - thickness;
        var end_angle = (start_angle + percent) * step;
        var start_angle = (start_angle * Math.PI) / 180;

        for (; radius > inner; --radius) {
            for (var angle = start_angle; angle < end_angle; angle += precision) {
                var cx = Math.round(x + radius * Math.cos(angle));
                var cy = Math.round(y + radius * Math.sin(angle));

                var cx2 = Math.round(x + radius * Math.cos(angle + precision));
                var cy2 = Math.round(y + radius * Math.sin(angle + precision));

                Render.Line(cx, cy, cx2, cy2, color);
            }
        }
    } else {
        Render.FilledRect(0, 0, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [0, 180, 255, 255]);
        Render.FilledRect(0, Global.GetScreenSize()[1] / 2, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [255, 255, 0, 255]);
    }
}

function main_aa() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue( ["Visuals", "wishcord", "wishcord", "Antiaim_x"]),
        y = UI.GetValue( ["Visuals", "wishcord", "wishcord", "Antiaim_y"]);

    var font = Render.AddFont("Verdana.ttf", 10, 100);
    var RealYaw = Local.GetRealYaw();
    var FakeYaw = Local.GetFakeYaw();
    var delta = Math.min(Math.abs(RealYaw - FakeYaw), 60).toFixed(1);
    var safety = Math.min(Math.round(1.7 * Math.abs(delta)), 100);
    if ((Local.GetRealYaw() - Local.GetFakeYaw()) > 0) {
        var side = "<";
    } else if ((Local.GetRealYaw() - Local.GetFakeYaw()) < 0){
        var side = ">";
    }
    else {
        var side = "~";
    }
    var text = "    FAKE (" + delta.toString() + "  ) | safety: " + safety.toString() + "% | side: " + side;
    var w = Render. TextSize(text, font)[0] + 8;

    Render.FilledRect(x - w, y, w, 2, [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], 255]);
    Render.FilledRect(x - w, y + 2, w, 18, [17, 17, 17, UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[3]]);
    Render.String(x + 5 - w, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.String(x + 4 - w, y + 4, 0, text, [255, 255, 255, 255], font);
    Render.Circle(x + 23 - w + Render. TextSize("FAKE (" + delta.toString(), font)[0], y + 8, 1, [255, 255, 255, 255]);
    draw_arc1(x + 9 - w, y + 11, 5, 3, 0, delta * 6, 45, [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], 255]);
    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x - w, y, x + w, y + 30)) {
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "Antiaim_x"], mouse_pos[0] + w / 2);
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "Antiaim_y"], mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_aa");

//Tickbase
/*function get_icon(a) {
    var letter = ""
    switch (a) {
        case "desert eagle":
            letter = "a"
            break
        case "dual berettas":
            letter = "b"
            break
        case "five seven":
            letter = "c"
            break
        case "glock 18":
            letter = "d"
            break
        case "ak 47":
            letter = "e"
            break
        case "aug":
            letter = "f"
            break
        case "awp":
            letter = "g"
            break
        case "famas":
            letter = "h"
            break
        case "m249":
            letter = "i"
            break
        case "g3sg1":
            letter = "j"
            break
        case "galil ar":
            letter = "k"
            break
        case "m4a4":
            letter = "l"
            break
        case "m4a1 s":
            letter = "m"
            break
        case "mac 10":
            letter = "n"
            break
        case "p2000":
            letter = "o"
            break
        case "mp5 sd":
            letter = "p"
            break
        case "ump 45":
            letter = "q"
            break
        case "xm1014":
            letter = "r"
            break
        case "pp bizon":
            letter = "s"
            break
        case "mag 7":
            letter = "t"
            break
        case "negev":
            letter = "u"
            break
        case "sawed off":
            letter = "v"
            break
        case "tec 9":
            letter = "w"
            break
        case "zeus x27":
            letter = "x"
            break
        case "p250":
            letter = "y"
            break
        case "mp7":
            letter = "z"
            break
        case "mp9":
            letter = "A"
            break
        case "nova":
            letter = "B"
            break
        case "p90":
            letter = "C"
            break
        case "scar 20":
            letter = "D"
            break
        case "sg 553":
            letter = "E"
            break
        case "ssg 08":
            letter = "F"
            break
        case "knife":
            letter = "G"
            break
        case "flashbang":
            letter = "H"
            break
        case "high explosive grenade":
            letter = "I"
            break
        case "smoke grenade":
            letter = "J"
            break
        case "molotov":
            letter = "K"
            break
        case "decoy grenade":
            letter = "L"
            break
        case "incendiary grenade":
            letter = "M"
            break
        case "c4 explosive":
            letter = "N"
            break
        case "usp s":
            letter = "P"
            break
        case "cz75 auto":
            letter = "Q"
            break
        case "r8 revolver":
            letter = "R"
            break
        case "bayonet":
            letter = "V"
            break
        case "flip knife":
            letter = "W"
            break
        case "gut knife":
            letter = "X"
            break
        case "karambit":
            letter = "Y"
            break
        case "m9 bayonet":
            letter = "Z"
            break
        case "falchion knife":
            letter = "1"
            break
        case "bowie knife":
            letter = "2"
            break
        case "butterfly knife":
            letter = "3"
            break
        case "shadow daggers":
            letter = "4"
            break
        case "ursus knife":
            letter = "5"
            break
        case "navaja knife":
            letter = "6"
            break
        case "stiletto knife":
            letter = "7"
            break
        case "skeleton knife":
            letter = "8"
            break
        case "huntsman knife":
            letter = "0"
            break
        case "talon knife":
            letter = "8"
            break
        case "classic knife":
            letter = "25"
            break
        case "paracord knife":
            letter = "Z"
            break
        case "survival knife":
            letter = "Z"
            break
        case "nomad knife":
            letter = "Z"
            break
        default:
            letter = ""
            break
    }
    return letter
}

UI.AddSliderInt(path, "Tickbase_x", 0, Global.GetScreenSize()[0]);
UI.AddSliderInt(path, "Tickbase_y", 0, Global.GetScreenSize()[1]);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}
var fa = 0;
var sa = 0;

function main_dt() {
    if (!World.GetServerString()) return;

    const x = UI.GetValue( ["Visuals", "wishcord", "wishcord", "Tickbase_x"]),
        y = UI.GetValue( ["Visuals", "wishcord", "wishcord", "Tickbase_y"]);

    localplayer_index = Entity.GetLocalPlayer();
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
    g_Local_classname = Entity.GetClassName(localplayer_weapon);
    var nextattack = Entity.GetProp(localplayer_weapon, "CBaseCombatWeapon", "m_flNextPrimaryAttack");
    var CanShoot = false;
    if (nextattack <= Globals.Curtime()) {
        CanShoot = true;
    }

    var frames = 8 * Globals.Frametime();

    var font = Render.AddFont("Verdana.ttf", 10, 100);
    var fontbullet = Render.AddFont("bullet.ttf", 24, 100);
    if (CanShoot && Exploit.GetCharge() > 0.7 && UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) {
        var text = "DT [v4.2 release] | tickbase(v): 14";
        var color = [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], 255];
    } else if (CanShoot && Exploit.GetCharge() > 0.7 && UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"])) {
        var text = "DT [v4.2 release] | tickbase(v): 7";
        var color = [UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[0], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[1], UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[2], 255];
    } else {
        var text = "DT [v4.2 release] | tickbase(v): 0";
        var color = [89, 89, 89, 255];
    }
    var w = Render. TextSize(text, font)[0] + 8;

    Render.FilledRect(x, y, w, 2, color);
        Render.FilledRect(x, y + 2, w, 18, [17, 17, 17, UI.GetColor( ["Visuals", "wishcord", "wishcord", "Watermark"])[3]]);
    Render.String(x + 5, y + 5, 0, text, [0, 0, 0, 180], font);
    Render.String(x + 4, y + 4, 0, text, [255, 255, 255, 255], font);

    Render.String(x + 4, y + 22, 0, get_icon(weapon_name), [255, 255, 255, 255], 5);
    if ((g_Local_classname == "CKnife" || g_Local_classname == "CWeaponSSG08" || g_Local_classname == "CWeaponAWP" || weapon_name == "r8 revolver" || g_Local_classname == "CHEGrenade" || g_Local_classname == "CMolotovGrenade" || g_Local_classname == "CIncendiaryGrenade" || g_Local_classname == "CFlashbang" || g_Local_classname == "CSmokeGrenade" || g_Local_classname == "CDecoyGrenade" || g_Local_classname == "CWeaponTaser" || g_Local_classname == "CC4")) {
        //return
    } else {
        if (CanShoot) {
            fa = Math.min(fa + frames, 1);
            Render.String(x + 10 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, fa * 255], fontbullet);
        } else {
            fa = 0;
        }
        if (CanShoot && Exploit.GetCharge() == 1 && UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])) {
            sa = Math.min(sa + frames, 1);
            Render.String(x + 30 + Render.TextSize(get_icon(weapon_name), 5)[0], y + 18, 0, "A", [255, 255, 255, sa * 255], fontbullet);
        } else {
            sa = 0;
        }
    }


    if (Global.IsKeyPressed(1) && UI.IsMenuOpen()) {
        const mouse_pos = Global.GetCursorPosition();
        if (in_bounds(mouse_pos, x, y, x + w, y + 30)) {
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "Tickbase_x"], mouse_pos[0] - w / 2);
            UI.SetValue( ["Visuals", "wishcord", "wishcord", "Tickbase_y"], mouse_pos[1] - 20);
        }
    }
}
Global.RegisterCallback("Draw", "main_dt");*/


UI.AddCheckbox(path, "Clan tag spammer")

function time_to_ticks(time) {
	var timer = time / Globals.TickInterval() + .5;
	return timer;
}
var old_text_anim = 0;
function anim(texta, indices) {
	if(!World.GetServerString()) return;
	if(UI.GetValue( ["Visuals", "wishcord", "wishcord", "Clan tag spammer"]))
	{
		text_anim = "               " + texta + "                      ";
	}
	else
	{ 
		text_anim = "  ";
	}
	tickinterval = Globals.TickInterval();
	tickcount = Globals.Tickcount() + time_to_ticks(Local.Latency());
	ddd = tickcount / time_to_ticks(0.3);
	ddd = ddd % indices.length;
	ddd = indices[parseInt(ddd)]+1;
	text_anim = text_anim.slice(ddd, ddd+15);
	if(text_anim != old_text_anim)
	{
		Local.SetClanTag(text_anim);
	}
	old_text_anim = text_anim;
}

function clantag() {
	anim("wishcord", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23])
}
Cheat.RegisterCallback("Draw", "clantag");


UI.AddCheckbox(path, "Enable chat logging" );

hitboxes = [
    'generic',
    'head',
    'chest',
    'stomach',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var scriptitems = ( ["Visuals", "wishcord", "wishcord"]);
var shots = 0;
var predicthc = 0;
var safety1 = 0;
var hitboxName = "";
var choked1 = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}

var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;

function ragebot_fire() {
	predicthc = Event.GetInt("hitchance");
	safety1 = Event.GetInt("safepoint");
	hitboxName = getHitboxName(Event.GetInt("hitbox"));
	exploit = (Event.GetInt("exploit")+1).toString();
  target = Event.GetInt("target_index");
  shots_fired++;
  logged = false;
  lastUpdate = Globals.Curtime();
}

function hitlog() {
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;

    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);
  	var simtime = Globals.Tickcount() % 17;

    var flags = "";

    if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";

  	if (safety1 == 1) {
  		safety1 = "true";
  	}
  	else {
  		safety1 = "false";
  	}

    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";
    else if (weapon == "knife")
      hittype = "Knifed ";

    if (me == attackerIndex && me != victimIndex) {
		Cheat.PrintColor([89, 119, 239, 255], "[wishcord] ");
    if (hittype == "Hit ") {
        if (UI.GetValue(["Visuals", "wishcord", "wishcord", "Enable chat logging"])) {
            Cheat.PrintChat(" \x08[\x0cwishcord\x08] [\x06"+shots.toString()+"\x08] "+hittype+name+"'s \x10"+HitgroupName(hitbox)+"\x08 for \x07"+target_damage.toString()+"\x08 ("+target_health.toString()+" remaining) aimed=\x10"+hitboxName+"\x08("+predicthc.toString()+"%%) safety=\x03"+safety1+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)\n");
        }
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety1+" ("+flags+") ("+simtime+":"+exploit+")\n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) aimed="+hitboxName+"("+predicthc.toString()+"%%) safety="+safety1+" ("+flags+") ("+simtime+":"+exploit+")");
    }
    else {
      Cheat.Print("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining) \n");
  		logs.push("["+shots.toString()+"] "+hittype+name+"'s "+HitgroupName(hitbox)+" for "+target_damage.toString()+" ("+target_health.toString()+" remaining)");
    }

		logsct.push(Globals.Curtime());
		logsalpha.push(255);
	}

  if (shots == 99)
    shots = 0;
  else
    shots++;

}

function removelogs() {
	if (logs.length > 6) {
		logs.shift();
		logsct.shift();
		logsalpha.shift();
	}

	if (logsct[0] + 6.5 < Globals.Curtime()) {
		logsalpha[0] -= Globals.Frametime() * 600;
		if (logsalpha[0] < 0) {
			logs.shift();
			logsct.shift();
			logsalpha.shift();
		}
	}
}

function item_purchase() {
	Cheat.PrintColor([89, 119, 239, 255], "[wishcord] ");
	Cheat.Print(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"\n");
	logs.push(Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid")))+" bought "+Event.GetString("weapon")+"");
	logsct.push(Globals.Curtime());
	logsalpha.push(255);
}

function onDraw() {
    if (!World.GetServerString()) return;
    var font = Render.AddFont("lucon.ttf", 11, 0);


	for (i = 0; i < logs.length; i++) {
        Render.String(4, 4 + 13*i, 0, logs[i], [0, 0, 0, logsalpha[i]], font);
		Render.String(3, 3 + 13*i, 0, logs[i], [255, 255, 255, logsalpha[i]], font);
    }

    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        var simtime = Globals.Tickcount() % 16;
        logged = true;
        var issafe = "true";
        var reason = "?";
        if (safety1 == 0) {
          issafe = "false";
        }

		if (Entity.IsAlive(target) == false)
			reason = "death";
		else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
			reason = "dead";
        else if (safety1 == true && predicthc < 76)
            reason = "spread";
        else if (safety1 == true && predicthc > 76)
            reason = "prediction error";

        var flags = "";

        if (exploit == 2)
          flags += "T";

          flags += "B";
		
		if (reason == "dead") {
			nlogs.push(["Shot missed due to death despite the server having enough time to process our shot", Globals.Curtime(), 6, 0])
		}
		
		if (reason == "prediction error") {
			nlogs.push(["Shot missed due to unexpected failure in cheat prediction performance", Globals.Curtime(), 6, 0])
		}
		
        Cheat.PrintColor([89, 119, 239, 255], "[wishcord] ");
        Cheat.Print("["+shots.toString()+"] "+"Missed "+Entity.GetName(target)+"'s "+hitboxName+"("+predicthc.toString()+"%%) due to "+reason+", safety="+issafe+" ("+flags+") ("+simtime+":"+exploit+")\n");
            logs.push("["+shots.toString()+"] "+"Missed "+Entity.GetName(target)+"'s "+hitboxName+"("+predicthc.toString()+"%%) due to "+reason+", safety="+issafe+" ("+flags+") ("+simtime+":"+exploit+")");

            if (UI.GetValue(["Visuals", "wishcord", "wishcord", "Enable chat logging"])) {
                Cheat.PrintChat(" \x08[\x0cwishcord\x08] [\x06"+shots.toString()+"\x08] "+"\x08Missed "+Entity.GetName(target)+"'s \x10"+hitboxName+"\x08("+predicthc.toString()+"%%) due to \x07"+reason+"\x08, safety=\x03"+issafe+"\x08 (\x10"+flags+"\x08) (\x10"+simtime+"\x08:\x10"+exploit+"\x08)");
            }
        logsct.push(Globals.Curtime());
    		logsalpha.push(255);
        if (shots == 99)
          shots = 0;
        else
          shots++;
      }
    }
}

function main1() {
	Global.RegisterCallback("ragebot_fire", "ragebot_fire");
	Global.RegisterCallback("item_purchase", "item_purchase");
  Global.RegisterCallback("player_hurt", "hitlog");
	Global.RegisterCallback("Draw", "onDraw");
	Global.RegisterCallback("Draw", "removelogs");
}

main1();

function hackedbyyagoland() {
    if (usernames.indexOf(Cheat.GetUsername()) !== -1) {
        //ok
    } else {
        Render.FilledRect(0, 0, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [0, 180, 255, 255]);
        Render.FilledRect(0, Global.GetScreenSize()[1] / 2, Global.GetScreenSize()[0], Global.GetScreenSize()[1] / 2, [255, 255, 0, 255]);
    }
}
Global.RegisterCallback("Draw", "hackedbyyagoland")