import org.scalatest.flatspec.AnyFlatSpec

class WordSpinnerSpec extends AnyFlatSpec {
  "SpinWords" should "return a string" in {
    val result: Any = spinWords("Hello World")
    assert(result.isInstanceOf[String])
  }

  it should "not mix words with 4 or less chars" in {
    val result: String = spinWords("Hi Mars")
    assert(result == "Hi Mars")
  }

  it should "mix reverse words with 5 or more chars" in {
    val result: String = spinWords("Hello Jupiter")
    assert(result == "olleH retipuJ")
  }
}
