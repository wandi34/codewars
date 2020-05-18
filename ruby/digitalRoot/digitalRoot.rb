def digital_root(n)
    result = n.to_s.chars.map(&:to_i).reduce(:+)
    return result < 10 ? result : (digital_root(result))
end
