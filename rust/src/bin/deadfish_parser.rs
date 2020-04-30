fn main() {}

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array

fn parse(code: &str) -> Vec<i32> {
    let mut tmp: i32 = 0;
    let mut result: Vec<i32> = Vec::new();
    for c in code.chars() { 
        match c {
            'i' => tmp += 1,
            'd' => tmp -= 1,
            's' => tmp *= tmp,
            'o' => result.push(tmp),
            _ => {}
        }
    }
    return result;
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn should_return_number_in_array() {
        assert_eq!(parse("o"), [0]);
    }

    #[test]
    fn should_increment_number() {
        assert_eq!(parse("io"), [1]);
    }

    #[test]
    fn should_decrement_number() {
        assert_eq!(parse("idio"), [1]);
    }

    #[test]
    fn should_square_number() {
        assert_eq!(parse("iiso"), [4]);
    }

    #[test]
    fn should_return_multiple_numbers() {
        assert_eq!(parse("ioio"), [1, 2]);
    }

    #[test]
    fn should_parse_codewars_string() {
        assert_eq!(parse("iiisdoso"), [8, 64]);
    }
 
}