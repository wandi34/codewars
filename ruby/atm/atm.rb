# There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
# You are given money in nominal value of n with 1<=n<=1500.
# Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
NOTES = [10, 20, 50, 100, 200, 500]

def atm(n)
    resNotes = 0
    NOTES.reverse().each { |note|
        resNotes += checkNote(n, note)
        n = n - checkNote(n, note) * note
        if n < 10 && n != 0 
            return -1
        elseif n == 0 
            return resNotes
        end
    }
    return resNotes
end

def checkNote(money, note)
    return (money / note)
end