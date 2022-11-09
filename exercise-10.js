

let square = 5;
let star = "*";

for(let i = 0;i<square;i++){
	for(let i = 0;i<square;i++){
	document.write(star);
}
document.write("<br>");
}
document.write("<br>");
let rows = 15;
let columns = 10;

for(let i = 0;i<columns;i++){
	for(let i = 0;i<rows;i++){
	document.write(star);
}
document.write("<br>");
}

let rows2 = 15;
let columns2 = 20;
document.write("<br>");
for(i=0;i<columns2;i++){
	if(i==1 || i==columns2-1){
		for(let q=0;q<rows2;q++){
			document.write(star);
			
		}
		
	}
	if(i>1 && i<columns2-1){
		for(let s=0;s<=rows2;s++){
			
			if(s==1 || s==rows2){
				document.write(star);
				
			}else if(s>1 && s<=rows2){
				
				document.write("&nbsp&nbsp");
		}}
	}
	document.write("<br>");
}





let sqr = 7;
for( let col = 1; col<=sqr;col++){
if(col == 1 || col == sqr){	
for( let row = 1; row<=sqr;row++){
	document.write(star);
}
}else{
	for( let row = 1; row<=sqr;row++){
		if(row == 1 || row == sqr){
			document.write(star);
		}else if(row == col){
			document.write(star);
		}else if(row + col -1 == sqr){
			document.write(star);
		}
		else{
			document.write("&nbsp&nbsp");
		}

	}
}
document.write("<br>");
}
document.write("<br>");

let rohm = 5;
let r2 = rohm;
for(let col = 1;col<=rohm;col++){
while(r2 > 0){
	for(let r = r2-1; r>0;r--){
		if(r2 >= 0){
		document.write("&nbsp&nbsp");
		}
	}
	r2--;

for(let row = 1; row<=rohm;row++){
	document.write(star);
}
document.write("<br>");
}}
