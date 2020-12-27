var iVictim_index, First_pos, Second_pos, Third_pos, Fourth_pos, Fifth_pos, First, Second, Third, Fourth, Five, iDamageCount = iOffsetCount = YOffsetFirst = YOffsetSecond = YOffsetThird = YOffsetFourth = YOffsetFive = loadFont = HitAttack = 0;  
var firstcolor = [255, 255, 255];
var secondcolor = [255, 255, 255];
var thirdcolor = [255, 255, 255];
var fourthcolor = [255, 255, 255];
var fifthcolor = [255, 255, 255];
//Store coordinates array
const first_screen_pos = [], second_screen_pos = [], third_screen_pos = [], fourth_screen_pos = [], fifth_screen_pos = [];

//>_<
//Damage event
function EVENT_PLAYER_HURT()
{
    //Get attacker
    iAttacker = Event.GetInt("attacker"); iAttacker_index = Entity.GetEntityFromUserID(iAttacker);
   
    //Get victim
    iVictim = Event.GetInt("userid"); iVictim_index = Entity.GetEntityFromUserID(iVictim);  
   
    if(Entity.GetLocalPlayer() == iVictim_index && Entity.GetLocalPlayer() !== iAttacker_index)    return;
   
    //BEGIN ANIM
    if(Entity.GetLocalPlayer() == iAttacker_index)
    {
        //First hit
        HitAttack = 1;
       
        //Reset every 5 hit
        if(iDamageCount == 5) iDamageCount = 0; if(iOffsetCount == 5) iOffsetCount = 0;
       
        //Collect them and set only 5 hits
        iDamageCount+=1;
       
        //This is offset for Y for each
        iOffsetCount+=1;        
        //This shit reads every hit with a new var...
        if(iDamageCount == 1)    {    First = Event.GetInt("dmg_health");    First_pos = Entity.GetRenderOrigin(iVictim_index);
		if (Event.GetInt("hitgroup") == 1) {firstcolor = [155, 200, 21, 255]}
		else if (Event.GetString("weapon") == "hegrenade" || Event.GetString("weapon") == "incendiary"  || Event.GetString("weapon") == "molotov") {firstcolor = [255, 0, 0, 255]}
		else {firstcolor = [255, 255, 255, 255]}
		}  
        if(iDamageCount == 2)    {    Second = Event.GetInt("dmg_health");    Second_pos = Entity.GetRenderOrigin(iVictim_index);
		if (Event.GetInt("hitgroup") == 1) {secondcolor = [155, 200, 21, 255]}
		else if (Event.GetString("weapon") == "hegrenade" || Event.GetString("weapon") == "incendiary"  || Event.GetString("weapon") == "molotov") {secondcolor = [255, 0, 0, 255]}
		else {secondcolor = [255, 255, 255, 255]}
		}              
        if(iDamageCount == 3)    {    Third = Event.GetInt("dmg_health");    Third_pos = Entity.GetRenderOrigin(iVictim_index);
		if (Event.GetInt("hitgroup") == 1) {thirdcolor = [155, 200, 21, 255]}
		else if (Event.GetString("weapon") == "hegrenade" || Event.GetString("weapon") == "incendiary"  || Event.GetString("weapon") == "molotov") {thirdcolor = [255, 0, 0, 255]}
		else {thirdcolor = [255, 255, 255, 255]}
		}      
        if(iDamageCount == 4)    {    Fourth = Event.GetInt("dmg_health");    Fourth_pos = Entity.GetRenderOrigin(iVictim_index);
		if (Event.GetInt("hitgroup") == 1) {fourthcolor = [155, 200, 21, 255]}
		else if (Event.GetString("weapon") == "hegrenade" || Event.GetString("weapon") == "incendiary"  || Event.GetString("weapon") == "molotov") {fourthcolor = [255, 0, 0, 255]}
		else {fourthcolor = [255, 255, 255, 255]}
		}		
        if(iDamageCount == 5)    {    Five = Event.GetInt("dmg_health");    Fifth_pos = Entity.GetRenderOrigin(iVictim_index);
		if (Event.GetInt("hitgroup") == 1) {fifthcolor = [155, 200, 21, 255]}
		else if (Event.GetString("weapon") == "hegrenade" || Event.GetString("weapon") == "incendiary"  || Event.GetString("weapon") == "molotov") {fifthcolor = [255, 0, 0, 255]}
		else {fifthcolor = [255, 255, 255, 255]}
		}
        //Setup offsets
        if(iOffsetCount == 1)    YOffsetFirst = 255; if(iOffsetCount == 2)    YOffsetSecond = 255; if(iOffsetCount == 3)    YOffsetThird = 255; if(iOffsetCount == 4)    YOffsetFourth = 255; if(iOffsetCount == 5)    YOffsetFive = 255;              
    }      
}

function HUD_REDRAW()
{
    //Once and lock font load
    if(loadFont == 0)
    {
        //this font u can get here https://onetap.su/threads/beta-in-development-onetap-hud-engine-0-1-dev-18945-18952-dec-27-2019.13647/
        fontSM2 = Render.AddFont("Verdana.ttf", 10, 400)
        loadFont = 1;
    }
   
    /*Render.StringCustom(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/2, 1, "" + iDamageCount, [ 255, 255, 255, 255 ], fontSM2);
    Render.StringCustom(Global.GetScreenSize()[0]/2, Global.GetScreenSize()[1]/2+50, 1, "" + iOffsetCount, [ 255, 255, 255, 255 ], fontSM2);*/

    //Stop flooding
    if(!HitAttack)    return;

    //Doing cycle through all players will affect on FPS heavily... so
    if(Entity.IsValid(iVictim_index))
    {
         
   
        //Setup x,y,z
        if(iDamageCount < 6)    
		{
			if (Array.isArray(First_pos))
				first_screen_pos = Render.WorldToScreen(First_pos);
			
			if (Array.isArray(Second_pos))
				second_screen_pos = Render.WorldToScreen(Second_pos);
			
			if (Array.isArray(Third_pos))
				third_screen_pos = Render.WorldToScreen(Third_pos);
			
			if (Array.isArray(Fourth_pos))
				fourth_screen_pos = Render.WorldToScreen(Fourth_pos);
			
			if (Array.isArray(Fifth_pos))
				fifth_screen_pos = Render.WorldToScreen(Fifth_pos);
		}
		
        //Five pieces of damage, the hell
			Render.String(first_screen_pos[0]-15+1, first_screen_pos[1]+YOffsetFirst-355+1, 1, "" + First, [ 0, 0,0, YOffsetFirst ], fontSM2);
			Render.String(first_screen_pos[0]-15, first_screen_pos[1]+YOffsetFirst-355, 1, "" + First, alp( firstcolor, YOffsetFirst ), fontSM2);
		
			Render.String(second_screen_pos[0]+15+1, second_screen_pos [1]+YOffsetSecond-355+1, 1, "" + Second, [ 0, 0, 0, YOffsetSecond ], fontSM2);
			Render.String(second_screen_pos[0]+15, second_screen_pos [1]+YOffsetSecond-355, 1, "" + Second, alp( secondcolor, YOffsetSecond ), fontSM2);
		
			Render.String(third_screen_pos[0]-25+1, third_screen_pos[1]+YOffsetThird-355+1, 1, "" + Third, [ 0,0,0, YOffsetThird ], fontSM2);
			Render.String(third_screen_pos[0]-25, third_screen_pos[1]+YOffsetThird-355, 1, "" + Third, alp( thirdcolor, YOffsetThird ), fontSM2);
		
			Render.String(fourth_screen_pos[0]+25+1, fourth_screen_pos[1]+YOffsetFourth-355+1, 1, "" + Fourth, [ 0, 0, 0, YOffsetFourth ], fontSM2);
			Render.String(fourth_screen_pos[0]+25, fourth_screen_pos[1]+YOffsetFourth-355, 1, "" + Fourth, alp(fourthcolor, YOffsetFourth ), fontSM2);
		
			Render.String(fifth_screen_pos[0]-10+1, fifth_screen_pos[1]+YOffsetFive-355+1, 1, "" + Five, [ 0, 0, 0, YOffsetFive ], fontSM2);
			Render.String(fifth_screen_pos[0]-10, fifth_screen_pos[1]+YOffsetFive-355, 1, "" + Five, alp( fifthcolor, YOffsetFive ), fontSM2);
		
    }      
}  

function pushY()
{
    if(YOffsetFirst > 1)    YOffsetFirst -= 2; if(YOffsetSecond > 1)    YOffsetSecond -= 2; if(YOffsetThird > 1)    YOffsetThird -= 2; if(YOffsetFourth > 1)    YOffsetFourth -= 2; if(YOffsetFive > 1)    YOffsetFive -= 2; 
}

function alp(c, a) {
  return [c[0], c[1], c[2], a]
}

function Main()
{
    Global.RegisterCallback("Draw", "HUD_REDRAW");
    Global.RegisterCallback("player_hurt", "EVENT_PLAYER_HURT");
	Global.RegisterCallback("CreateMove", "pushY");
}

Main();