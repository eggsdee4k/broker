module.exports = function Boxker(mod) {

	mod.command.add('broker', () =>{
		mod.command.message('BAAAAAAAAAAAAAAAAAAAAHX');
		mod.toClient('S_NPC_MENU_SELECT', 1, {type:28})
		return false
	})
}