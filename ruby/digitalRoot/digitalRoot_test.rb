require_relative "digitalRoot"
require "test/unit"

class TestDigitalRoot < Test::Unit::TestCase
    def test_typeIsNumber
      assert_true(digital_root(2).is_a?(Numeric) )
    end
    def test_singleDigit
      assert_equal(7, digital_root(7) )
    end
    def test_ten
      assert_equal(1, digital_root(10) )
    end
    def test_zero
      assert_equal(0, digital_root(0) )
    end
    def test_simpleFromCodeWars
      assert_equal(7, digital_root(16) )
    end
    def test_complexFromCodeWars
      assert_equal(6, digital_root(456) )
    end
end
