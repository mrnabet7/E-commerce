#include <iostream>
#include <filesystem>
using namespace std;

string path = "C:\\Users\\etoha\\Documents\\Mission\\Learning\\Programing\\IP1\\Javascript\\Projects\\E-commerce\\assets\\pro\\";

int main(){
	
	//Variable declaration
	string folder;
	string d, d2, s2, s;
	char n;
	
	// User input handling
	cout << "Input the folde name\n";
	cin >> folder;
	cin >> n;
	
	// A method to rename files
	for(int j = 1; j <= 20; j++){
//		A = (path + folder + "\\").c_str() + b;
		d = to_string(j)+".jpg";
		d2 = to_string(j)+ n + ".jpg";
		s = path + folder + "\\" + d;
		s2 = path + folder + "\\" + d2;
		rename(s.c_str(), s2.c_str());
	}
	
	return 0;
}