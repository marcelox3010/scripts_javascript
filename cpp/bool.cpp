#include <iostream>
int main()
{	
	bool v_ou_f;
	// SEM DECLARAÇÃO
	std::cout << "Bool sem valor = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";
	
	// DECLARANDO TRUE
	
	v_ou_f = true;
	std::cout << "Bool declarado true = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";

	// DECLARANDO FALSE	
	v_ou_f = false;
	std::cout << "Bool declarado false = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";

	// DECLARANDO 1	
	v_ou_f = 1;
	std::cout << "Bool declarado 1 = " << v_ou_f << "\n";

	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";
	
	// DECLARANDO 0
	v_ou_f = 0;
	std::cout << "Bool declarado 0 = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";

	// DECLARANDO > 1	
	v_ou_f = 2;
	std::cout << "Bool declarado 2 = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";

	// DECLARANDO < 0	
	v_ou_f = -1;
	std::cout << "Bool declarado -1 = " << v_ou_f << "\n";
	if(v_ou_f) std::cout << "VERDADEIRO\n\n";
	else std::cout << "FALSO\n\n";

	return 0;
}
