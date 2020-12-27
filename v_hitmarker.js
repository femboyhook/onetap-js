var damageVector = [ ];
function Damage(headshot, vec3, time) {
    this.headshot = headshot;
    this.vec3 = vec3;
    this.time = time;
    damageVector.push(this);
}
function playerHurt() {
    var victim = Entity.GetEntityFromUserID( Event.GetInt("userid" ) );
    var attacker = Entity.GetEntityFromUserID( Event.GetInt("attacker") );
    if ( !Entity.IsLocalPlayer(attacker) )
        return;
    var attackBone = Event.GetInt("hitgroup");
	switch (attackBone) {
	case 1:
		var pos = Entity.GetHitboxPosition( victim, 0 );
		break;
	case 2:
		var pos = Entity.GetHitboxPosition( victim, 5 );
		break;
	case 3:
		var pos = Entity.GetHitboxPosition( victim, 2 );
		break;
	case 4:
		var pos = Entity.GetHitboxPosition( victim, 13 );
		break;
	case 5:
		var pos = Entity.GetHitboxPosition( victim, 14 );
		break;
	case 6:
		var pos = Entity.GetHitboxPosition( victim, 7 );
		break;
	case 7:
		var pos = Entity.GetHitboxPosition( victim, 8 );
		break;
	default:
		var pos = Entity.GetHitboxPosition( victim, 3 );
		break;
	}
    new Damage( Event.GetInt("hitgroup"), pos, Globals.Realtime() )
}
function drawMarker() {
    for ( var i in damageVector ) {
        if (Globals.Realtime() - damageVector[i].time > 1) {
            damageVector.splice(i, 1);
            i--;
            continue;
        }
        var animTime = Globals.Realtime() - damageVector[i].time;
        var finalTime = (animTime * 255) * -1;
        var hWidth = 4;
        var crossSize = hWidth
        colVal = [255, 255, 255];
        r = colVal[0];
        g = colVal[1];
        b = colVal[2];
        var worldToScreen = Render.WorldToScreen(damageVector[i].vec3);
        if (worldToScreen != undefined) {
            if (worldToScreen[0] != undefined || worldToScreen[1] != undefined) {
            Render.Line(worldToScreen[0] - 6, worldToScreen[1] - 6, worldToScreen[0] - 1, worldToScreen[1] - 1, [ 0, 0, 0, finalTime ] );
            Render.Line(worldToScreen[0] + 5, worldToScreen[1] - 6, worldToScreen[0] + 2, worldToScreen[1] - 1, [ 0, 0, 0, finalTime ] );
            Render.Line(worldToScreen[0] - 6 , worldToScreen[1] + 5, worldToScreen[0] - 1, worldToScreen[1] + 2, [ 0, 0, 0, finalTime ] );
            Render.Line(worldToScreen[0] + 5, worldToScreen[1] + 5, worldToScreen[0] + 2, worldToScreen[1] + 2, [ 0, 0, 0, finalTime ] );
            Render.Line(worldToScreen[0] - 6, worldToScreen[1] - 6, worldToScreen[0] - 2, worldToScreen[1] - 2, [ r, g, b, finalTime ] );
            Render.Line(worldToScreen[0] + 5, worldToScreen[1] - 6, worldToScreen[0] + 1, worldToScreen[1] - 2, [ r, g, b, finalTime ] );
            Render.Line(worldToScreen[0] - 6 , worldToScreen[1] + 5, worldToScreen[0] - 2, worldToScreen[1] + 1, [ r, g, b, finalTime ] );
            Render.Line(worldToScreen[0] + 5, worldToScreen[1] + 5, worldToScreen[0] + 1, worldToScreen[1] + 1, [ r, g, b, finalTime ] );
        }
    }
    }
}
Cheat.RegisterCallback("player_hurt", "playerHurt");
Cheat.RegisterCallback("Draw", "drawMarker");