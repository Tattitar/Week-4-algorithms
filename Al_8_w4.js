// My age is 24.
let myAge = 24;

// function that compares age with my age and returns one of three results.
// 1. if > Name "is older than me."
// 2. if < Name "is younger than me."
// 3. if = Name "is the same age as me."
function compareAge(name, age) {
    if(age > myAge) {
        // if > Name "is older than me. "
        console.log(name + ' ' + 'is older than me.')
    } else {
        if(age < myAge) {
            // if < Name "is younger than me."
            console.log('"' + name + ' ' + 'is younger than me.' + '"')

        } else {
            if(age = myAge) {
                // 3. if = Name "is the same age as me."
                console.log('"' + name + ' ' + 'is the same age as me.' + '"')
            } else {
                "Age must be a number"
            }
        }
        
    }
    
}
compareAge("Joel", 36);
compareAge("Samuel", 23);
compareAge("Lily", 24);

//Samuel is 23. I am assuming that Samuel and Lily both being 24 is a typo.