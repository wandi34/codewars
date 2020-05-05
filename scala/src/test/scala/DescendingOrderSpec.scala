import org.scalatest.flatspec.AnyFlatSpec

class DescendingOrderSpec extends AnyFlatSpec {
  val cut: DescendingOrder = new DescendingOrder()
  "A DescendingOrder" should "order numbers descending" in {
    val result: Int = cut.descendingOrder(12)
    assert(result == 21)
  }

  it should "return 0 for 0" in {
    assert(0 == cut.descendingOrder(0))
  }

  it should "sort a complexer number" in {
    assert(987654321 == cut.descendingOrder(123456789))
  }
}