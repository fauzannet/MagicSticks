// MagicSticks - Release //
// Fauzan_Net - 2016  //
// My twitter : @_FauzanNT  //
//1.1.0 Version This MOD//

const CURRENT_VERSION = "1.1.0";
var latestVersion;
var latestPocketEditionVersion;
var targetMCPEVersion = "0.15.x";
var mcpeVersion = ModPE.getMinecraftVersion();
var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
var explode;
var initialized=false;
var velX;
var velY;
var velZ;
var digg=0;
var dig;
var time=0;
var zoom=0;
var fly=0;

ModPE.setItem(500,"book_portfolio",0,"§2Master Of StickMagic");
Item.addShapedRecipe(500, 1, 0, [
	"xrx",
	"rgr",
	"xrx"], ["r", 339, 0, "x", 280, 0, "g", 340, 0]);
ModPE.setItem(501,"stick",0,"§2Stick Of Diamonds");
ModPE.setFoodItem(502,"stick",0,10,"§2Stick Of Heal");
ModPE.setItem(503,"stick",0,"§2Stick Of Kill");
ModPE.setItem(504,"stick",0,"§2Stick Of Suicide");
ModPE.setItem(505,"stick",0,"§2Stick Of Tree");
ModPE.setItem(506,"stick",0,"§2Stick Of Fly");
ModPE.setItem(507,"stick",0,"§2Stick Of Explode");
ModPE.setItem(508,"stick",0,"§2Stick Of Monster");
ModPE.setItem(509,"stick",0,"§2Stick Of Time");
ModPE.setItem(510
,"stick",0,"§2Stick Of Zoom");

function newLevel()
{
	 new java.lang.Thread(new java.lang.Runnable() {
        run: function() {
update();
            if(latestVersion != CURRENT_VERSION && latestVersion != undefined) {
                clientMessage(ChatColor.BLUE + "[MagicSticks]" + ChatColor.WHITE + " There is a new version available (v" + latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
                       } else {
                currentActivity.runOnUiThread(new java.lang.Runnable() {
                    run: function() {
                        android.widget.Toast.makeText(currentActivity, new android.text.Html.fromHtml("<b>MagicSticks</b> You have the latest version"), 0).show();
                    }
                });
            }
        }
    }).start();
clientMessage(ChatColor.GREEN + "[MagicSticks] By Fauzan_Net");
clientMessage(ChatColor.BLUE + "Follow My twitter : @_FauzanNT");
Player.addItemCreativeInv(500, 1, 0);
Player.addItemCreativeInv(501, 1, 0);
Player.addItemCreativeInv(502, 1, 0);Player.addItemCreativeInv(503, 1, 0);
Player.addItemCreativeInv(504, 1, 0);
Player.addItemCreativeInv(505, 1, 0);
Player.addItemCreativeInv(506, 1, 0);
Player.addItemCreativeInv(507, 1, 0);
Player.addItemCreativeInv(508, 1, 0);
Player.addItemCreativeInv(509, 1, 0);
Player.addItemCreativeInv(510, 1, 0);
Item.setCategory(500,3,0);
Item.setCategory(501,3,0);
Item.setCategory(502,3,0);
Item.setCategory(503,3,0); 
Item.setCategory(504,3,0);
Item.setCategory(505,3,0);
Item.setCategory(506,3,0);
Item.setCategory(507,3,0);
Item.setCategory(508,3,0);
Item.setCategory(509,3,0);
Item.setCategory(510.,3,0);
}

function useItem(x,y,z,i,b){
if(i == 502){
Player.setHealth("22");
}else if(getCarriedItem()==507){
		explode = Level.spawnMob(x, y+1, z, 15);
		initialized=true;
}else if(getCarriedItem()==508){
Level.spawnMob(x, y+1, z, 30);
Level.spawnMob(x, y+1, z+1, 31);
Level.spawnMob(x+2, y+1, z, 32);
Level.spawnMob(x, y+1, z+2, 33);
Level.spawnMob(x+1, y+1, z, 34);
Level.spawnMob(x, y+1, z+1, 35);

}else if(getCarriedItem()==506){
		if (time){
		 Player.setCanFly(10);
        Player.setFlying(10);
		clientMessage("You Can Fly.");
		}
		else{
   Player.setCanFly(0);
   Player.setFlying(0);
		clientMessage("You Can't Fly.");
		}
		fly=!fly;
}else if(getCarriedItem()==509){
 		if (time){
		Level.setTime(0); //change time to day
		clientMessage("Time set to day.");
		}
		else{
   	Level.setTime(14000); //change time to night
		clientMessage("Time set to night.");
		}
		time=!time;
}else if(getCarriedItem()==510){
 		if (zoom){
	 ModPE.setFov(20);
		}
		else{
    ModPE.setFov(70);
		}
		zoom=!zoom;
}else if(getCarriedItem()==504){
Player.setHealth("-20")
}else if(getCarriedItem()==501){
Level.dropItem(x,y+1,z,0,264,5);
Level.dropItem(x,y+2,z,0,264,5);
Level.dropItem(x,y+3,z,0,264,5);
Level.dropItem(x,y+4,z,0,264,5);
Level.dropItem(x,y+5,z,0,264,5);
Level.dropItem(x,y+6,z,0,264,5);
Level.dropItem(x,y+7,z,0,264,5);
Level.dropItem(x,y+8,z,0,264,5);
Level.dropItem(x,y+9,z,0,264,5);
Level.dropItem(x,y+10,z,0,264,5);
Level.dropItem(x,y+11,z,0,264,5);
Level.dropItem(x,y+12,z,0,264,5);
Level.dropItem(x,y+13,z,0,264,5);
Level.dropItem(x,y+14,z,0,264,5);
Level.dropItem(x,y+15,z,0,264,5);
Level.dropItem(x,y+16,z,0,264,5);
Level.dropItem(x,y+17,z,0,264,5);
Level.dropItem(x,y+18,z,0,264,5);
Level.dropItem(x,y+19,z,0,264,5);
Level.dropItem(x,y+20,z,0,264,5);
Level.dropItem(x,y+21,z,0,264,5);
Level.dropItem(x,y+22,z,0,264,5);
Level.dropItem(x,y+23,z,0,264,5);
Level.dropItem(x,y+24,z,0,264,5);
Level.dropItem(x,y+25,z,0,264,5);
Level.dropItem(x,y+26,z,0,264,5);
Level.dropItem(x,y+27,z,0,264,5);
Level.dropItem(x,y+28,z,0,264,5);
Level.dropItem(x,y+29,z,0,264,5);
Level.dropItem(x,y+30,z,0,264,5);
Level.dropItem(x,y+31,z,0,264,5);
Level.dropItem(x,y+32,z,0,264,5);
Level.dropItem(x,y+33,z,0,264,5);
Level.dropItem(x,y+34,z,0,264,5);
Level.dropItem(x,y+35,z,0,264,5);
Level.dropItem(x,y+36,z,0,264,5);
Level.dropItem(x,y+37,z,0,264,5);
Level.dropItem(x,y+38,z,0,264,5);
Level.dropItem(x,y+39,z,0,264,5);
Level.dropItem(x,y+40,z,0,264,5);
Level.dropItem(x,y+100,z,0,264,5);
Level.dropItem(x,y+101,z,0,264,5);
Level.dropItem(x,y+102,z,0,264,5);
Level.dropItem(x,y+103,z,0,264,5);
Level.dropItem(x,y+104,z,0,264,5);
Level.dropItem(x,y+105,z,0,264,5);
Level.dropItem(x,y+106,z,0,264,5);
Level.dropItem(x,y+107,z,0,264,5);
Level.dropItem(x,y+108,z,0,264,5);
Level.dropItem(x,y+109,z,0,264,5);
Level.dropItem(x,y+110,z,0,264,5);
}else if(getCarriedItem()==500){
clientMessage("Now You Are Master Wizard");
Level.dropItem(x,y+1,z,0,501,1);
Level.dropItem(x,y+1,z,0,502,1);
Level.dropItem(x,y+1,z,0,503,1);
Level.dropItem(x,y+1,z,0,504,1);
Level.dropItem(x,y+1,z,0,505,1);
Level.dropItem(x,y+1,z,0,506,1);
Level.dropItem(x,y+1,z,0,507,1);
Level.dropItem(x,y+1,z,0,508,1);
Level.dropItem(x,y+1,z,0,509,1);
Level.dropItem(x,y+1,z,0,510,1); 
}else if(getCarriedItem()==505){
		setTile(x,y,z,17);
		setTile(x,y+1,z,17);
		setTile(x,y+2,z,17);
		setTile(x,y+3,z,17);
		setTile(x,y+4,z,17);
		setTile(x,y+5,z,17);
		setTile(x,y+6,z,18);
		setTile(x,y+7,z,18);
		setTile(x+1,y+6,z,18);
		setTile(x-1,y+6,z,18);
		setTile(x,y+6,z+1,18);
		setTile(x,y+6,z-1,18);
		setTile(x+1,y+5,z,18);
		setTile(x-1,y+5,z,18);
		setTile(x,y+5,z+1,18);
		setTile(x,y+5,z-1,18);
		setTile(x+1,y+4,z,18);
		setTile(x-1,y+4,z,18);
		setTile(x,y+4,z+1,18);
		setTile(x,y+4,z-1,18);
		setTile(x+1,y+5,z+1,18);
		setTile(x-1,y+5,z-1,18);
		setTile(x-1,y+5,z+1,18);
		setTile(x+1,y+5,z-1,18);
		setTile(x+2,y+5,z,18);
		setTile(x-2,y+5,z,18);
		setTile(x,y+5,z+2,18);
		setTile(x,y+5,z-2,18);
}
}

function attackHook(attacker,victim){
var HP = Entity.getHealth(victim);
 var DMG = HP - 20;
	if(getCarriedItem() ==503){
	Entity.setHealth(victim,DMG);
}
}

function modTick()
{
	if(initialized)
	{
		Level.explode(Entity.getX(explode), Entity.getY(explode), Entity.getZ(explode), 5);
		Entity.remove(explode);
		explode=null;
		initialized=false;
	}
}

// Check Auto Update \\
 function update() {
    try {
        // download content
        var url = new java.net.URL("example");
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedVersion = "";
        var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var rowVersion = "";
        while((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
        latestVersion = loadedVersion.split(" ")[0];
        latestPocketEditionVersion = loadedVersion.split(" ")[1];

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        clientMessage(CURRENT_VERSION + " " + latestVersion);
    } catch(err) {
        clientMessage(ChatColor.BLUE + "[MagicSticks]" + ChatColor.WHITE + " Can't check for updates, please check your Internet connection.");
        ModPE.log("[MagicSticks] update() caught an error: " + err);
    }
}
