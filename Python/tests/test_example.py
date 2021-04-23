import pytest
from src.example import example_addition

class TestClass:

    def test_example(self):
        result = example_addition(5.0,6.0)
        assert result == 11.0
        