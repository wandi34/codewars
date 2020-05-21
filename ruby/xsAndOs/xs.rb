def XO(str)
    result = str.upcase.chars.reduce(0) {|sum, char| sum + xOrO(char)}
    return result === 0 ? true : false
end

def xOrO(char) 
    case char 
    when 'X'
        return 1
    when 'O'
        return -1
    else
        return 0
    end
end
