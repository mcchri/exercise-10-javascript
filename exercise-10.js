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

let rows3 = 40;
let columns3 = 20;
document.write("<br>");
for(i=0;i<columns3;i++){
	if(i==1 || i==columns3-1){
		for(let q=0;q<rows3;q++){
			document.write(star);
			
		}
		
	}
	if(i>1 && i<columns3-1){
		for(let s=0;s<=rows3;s++){
			
			if(s==1 || s==rows3){
				document.write(star);
				
			}else if(s>1 && s<=rows3){
				
				document.write("&nbsp&nbsp");
		    }else if(s==i){
				document.write(star);
			}}
	}
	document.write("<br>");
}

