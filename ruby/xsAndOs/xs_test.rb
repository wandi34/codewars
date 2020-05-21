require_relative "xs"
require "test/unit"

class TestXsAndOs < Test::Unit::TestCase
    def test_typeIsBoolean
      assert_true(!!XO("foo") == XO("foo") )
    end
    def test_TrueForEmpty
        assert_true(XO(""))
    end
    def test_CodewarsTests
        assert_true(XO('xo'))
        assert_true(XO('XO'))
        assert_true(XO('xo0'))
        assert_false(XO('xxxoo'))
        assert_true(XO("xxOo"))
    end
end