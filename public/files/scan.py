import sys

correct_password = "132903"

try:
    # Ask the user to input the password
    password = input("Enter password to login: ")

    # Check if the entered password is correct
    if password == correct_password:
        print("Login successful!")
        
        # Display multiple lines
        print("\nWelcome to Chuntur passworld!")
        print("----------------------------")
        print("1. Bitwarden: JJ7,<4Yn#?GR<Yo2,*%reO:")
        print("2. Valorant: 3mlCBQ*Bp57c!W15Y660erinrebhalobashi")
        print("3. Github: magirayan84@gmail.com = 4#|4DgsNR4-{")
        print("4. gomes242-35-127@diu.edu.bd = HY9d@4CjIt7)")
        print("----------------------------")
        print("Varsity LAB Related:")
        print("----------------------------")
        print("CodeForces: RayanGomes_127 =  &rr;4c5/;LB^q?4")
        print("beecrowd: chuntumiya@gmail.com =   aBoPKhabiNakiGanja!@1")
        print("----------------------------")
        print("Varsity BalSal")
        print("BLC: rayangomes   ==  btWqF54V)/1")
        print("""Student Portal: 242-35-127 == 6"1o5Cq~8=:7""")
        print("")
    else:
        print("Incorrect password. Access denied.")
    
    # Wait for the user to type "exit" to quit the program
    while True:
        exit_command = input("\nType 'exit' to quit the program: ")
        if exit_command.lower() == 'exit':
            print("Exiting program...")
            break

except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
