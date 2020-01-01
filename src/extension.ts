// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { resolve_pattern } from "./resolve_string";
import { Formula } from './math_formula/formula';
import { extract_function_string } from './extract_string';



function temp_testing() {
	console.log("===================");
	resolve_pattern("sss(aaa, sss)");
	resolve_pattern("s + v");
	resolve_pattern("ssss(Sss, ssd) + aaA");
	resolve_pattern("(abc + abc)");
	resolve_pattern("sasas");
	resolve_pattern("____");
	resolve_pattern("asd(ss(xxx + ssd), sss + dd(ss, dd_d))");
	resolve_pattern("ss(xxx + ssd) / dd(ss, dd_d)");
	resolve_pattern("(ss(xxx + ssd) / dd(ss, dd_d))");
	resolve_pattern("(sss(sdds)) + cc(sds, asd)")
	console.log("===================");
	let temp : Formula = resolve_pattern("hypot(fabs(a + b ), acos(x))");
	console.log(temp);
	let temp2 : Formula = resolve_pattern("atan2f (hypot(fabs(a + b ), acos(x  )), xx  )")
	console.log(temp2);
	let temp3 : Formula = resolve_pattern("( round(yy) +atan2f (hypot(fabs(a + b ), acos(x  )), xx  ))")
	console.log(temp3);
	let temp4 : Formula = resolve_pattern("( roundx(yy) +atan2f (hypot(fabs(a + b ), acos(x  )), xx  ))")
	console.log(temp4);
	console.log("==================");
	return;
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log("c file opened!!");	

	// Temporary testing. Will be deleted when releasing
	temp_testing();

	vscode.languages.registerHoverProvider('c', {
		provideHover(document, position, token) {
			const word = extract_function_string(document, position);
			return new vscode.Hover(word);
		}
	});

	

}



// this method is called when your extension is deactivated
export function deactivate() {}
