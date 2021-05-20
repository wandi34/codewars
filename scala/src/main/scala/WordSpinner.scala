// In scala all functions are "first-class objects". So they have to be an object
// Instead of packaging the function into a real object. Just make the function to an object
// Shorthand cond ? then : else didnt work. Used inline if instead
object spinWords extends (String => String) {
    def apply(text: String): String = text.split(" ").map(w => if(w.length < 5) w else w.reverse).mkString(" ")
}