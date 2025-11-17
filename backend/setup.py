"""
Django Backend Setup Script
Run this script to initialize the Django project structure
"""
import os
import subprocess
import sys

def run_command(command, cwd=None):
    """Run a shell command"""
    try:
        result = subprocess.run(
            command,
            shell=True,
            cwd=cwd,
            capture_output=True,
            text=True
        )
        if result.returncode != 0:
            print(f"Error: {result.stderr}")
            return False
        print(result.stdout)
        return True
    except Exception as e:
        print(f"Error running command: {e}")
        return False

def main():
    print("=" * 60)
    print("E-Commerce Backend Setup")
    print("=" * 60)
    
    # Check if virtual environment exists
    if not os.path.exists('venv'):
        print("\n1. Creating virtual environment...")
        if sys.platform == 'win32':
            run_command('python -m venv venv')
        else:
            run_command('python3 -m venv venv')
    else:
        print("\n1. Virtual environment already exists")
    
    # Activate virtual environment and install dependencies
    print("\n2. Installing dependencies...")
    if sys.platform == 'win32':
        pip_cmd = 'venv\\Scripts\\pip'
        python_cmd = 'venv\\Scripts\\python'
    else:
        pip_cmd = 'venv/bin/pip'
        python_cmd = 'venv/bin/python'
    
    run_command(f'{pip_cmd} install --upgrade pip')
    run_command(f'{pip_cmd} install -r requirements.txt')
    
    # Create Django project if it doesn't exist
    if not os.path.exists('ecommerce_project'):
        print("\n3. Creating Django project...")
        run_command(f'{python_cmd} -m django startproject ecommerce_project .')
    else:
        print("\n3. Django project already exists")
    
    # Create .env file if it doesn't exist
    if not os.path.exists('.env'):
        print("\n4. Creating .env file from .env.example...")
        if os.path.exists('.env.example'):
            import shutil
            shutil.copy('.env.example', '.env')
            print("Please update .env file with your actual configuration values")
    else:
        print("\n4. .env file already exists")
    
    print("\n" + "=" * 60)
    print("Setup Complete!")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Update the .env file with your configuration")
    print("2. Create PostgreSQL database")
    print("3. Run: python manage.py migrate")
    print("4. Run: python manage.py createsuperuser")
    print("5. Run: python manage.py runserver")
    print("\nTo activate virtual environment:")
    if sys.platform == 'win32':
        print("   venv\\Scripts\\activate")
    else:
        print("   source venv/bin/activate")

if __name__ == '__main__':
    main()

