'''
Calculate the multiplication and sum of two numbers

Given two integer numbers return their product only if the product is greater than or equal to 1000, else return their sum.

Given 1:
number1 = 20
number2 = 30

Expected Output:
The result is 50


Given 2:
number1 = 40
number2 = 30

Expected Output:
The result is 1200
'''

def multiplication_or_sum(num1, num2):
    # calculate the product of two numbers
    product = num1 * num2
    # check if the product is greater than or equal to 1000
    if product >= 1000:
        return product
    else:
        # if the product is less than 1000, calculate the sum
        return num1 + num2

# first condition
result = multiplication_or_sum(20, 30)
print("The result is", result)

# second condition
result = multiplication_or_sum(40, 30)
print("The result is", result)