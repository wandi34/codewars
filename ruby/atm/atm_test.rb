require_relative "atm"
require "test/unit"

class TestAtm < Test::Unit::TestCase
    def test_typeIsNumber
      assert_true(atm(2).is_a?(Numeric) )
    end
    def test_errorMoneyLessThan10
      assert_equal(-1, atm(7) )
    end
    def test_oneNoteFor10
        assert_equal(1, atm(10) )
    end
    def test_codeWarsCorrectTests
        assert_equal(4, atm(770) )
        assert_equal(2, atm(550) )
        assert_equal(4, atm(1250) )
        assert_equal(10, atm(5000) )
    end
    def test_codeWarsIncorrectTests
        assert_equal(-1, atm(125) )
        assert_equal(-1, atm(666) )
        assert_equal(-1, atm(42) )
    end
end
