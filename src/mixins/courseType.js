export default function(){

	let courseTypeFn = ( type )=>{
		let val = '';
		switch (type) {
	        case 1:
	          val = '初阶';
	          break;
	        case 2:
	         val = '中阶';
	          break;
	        case 3:
	          val = '高阶';
	          break;
	        default:
	          val = '';
	    }
	    return val;
	}

	return {
		courseTypeFn,
	}

}