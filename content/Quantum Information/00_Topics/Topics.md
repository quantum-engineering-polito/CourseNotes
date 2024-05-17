---
nextnote: 
author: 
authorlink: 
draft: true
---
# Topics

1) Entropy
	1) Thermodynamic definition (Clausius)
	2) Boltzmann
	3) Gibbs
	4) Boltzmann-Gibbs
	5) Shannon
		1) Derivation (==proof==)
		2) Properties
		3) Conditional
		4) Joint
		5) Relative
	6) Quantum entropy (Von Neumann)
		1) Preliminaries
			1) Outer product
			2) Trace
			3) Density operator
			4) Reduced density operator
		2) Quantum relative entropy
			1) Properties
			2) Klein inequality (==proof==)
		3) Properties
		4) Measurement and entropy
		5) Joint
		6) Conditional
		7) Entropy of mixed states
		8) Entropy for entangled states
2) Quantum computing
	3) Quantum gates
	4) No cloning theorem
	5) Teleportation
	6) Superdense coding
7) Discrete noiseless channel

# Formulas 

%% operators definition %%
$$
 \DeclareMathOperator{\tr}{Tr}
$$%% operators definition %%
  
# Shannon entropy
   
$$
H = - \sum_{i=1}^{n} p_{i} \log p_{i}
$$
  
# Joint entropy
  
  
  
$$
\displaylines{
H(x,y) = - \sum_{i,j} p(i,j) \log p(i,j) \\
H(x) = - \sum_{i,j} p(i,j) \log \sum_{j} p(i,j)
}
$$
## Independent events
  
Two events are independent if and only if
  
$$
H(x,y) = H(x) + H(y)
$$
  
# Conditional entropy
  
  
$$
H_{x}(y) = H(y | x)= - \sum_{i,j} p(i,j)\log p_{i} (j) = H(x,y) - H(x)
$$
  
# Completeness relation
  
$$
\sum_{i} \ket{i} \bra{i} = \mathbb{I}
$$
  
# Trace
  
$$
  
\tr(A) \triangleq \sum_{i} \braket{ i | A | i } = \text{sum of diagonal elements}
$$
$$
\tr(\ket{b_1} \bra{b_2} )= \braket{ b_2|b_1 } 
$$
## Cyclic 

$$
\tr(AB) = \tr(BA)
$$

## Linear 

$$
\displaylines{
\tr(A + B) = \tr(A) + \tr(B) \\
\tr(zA) = z \tr(A)
}
$$

# Density matrix
  
$$
\rho \equiv \sum_{i} p_{i} \ket{\psi_{i}} \bra{\psi_{i}}
$$
## Conditions for being a density operator 

$$
\begin{align}
&1) \quad \tr(\rho) = 1  \\
&2) \quad \rho \text{ must be a positive operator}
\end{align}
$$


## Pure or mixed state
  
  
$$
\begin{align}
 & \tr(\rho^{2}) = 1 \quad \Longrightarrow \quad \text{pure state} \\
 & \tr(\rho^{2}) < 1 \quad \Longrightarrow \quad \text{mixed state}
\end{align}
$$

# Reduced density operator 

$$
\rho ^{A} = \tr_{B}(\rho^{AB})
$$

## Partial trace
$$
\tr_{B}(\ket{a_{1}} \bra{a_{2}} \otimes  \ket{b_1} \bra{b_2} ) \triangleq \ket{a_1} \bra{a_2} \tr(\ket{b_1} \bra{b_2}  )
$$


# Measurements 

Given a set of measurement operators $\{M_{m}\}$, where the index $m$ refers to the measurement outcome that may occur in the experiment, if the system is in state $\rho$ before the measurement, the probability that the result $m$ occurs is 

$$
p(m) = \tr(M_{m}^{\dagger} M_{m} \rho)
$$

The state after the measurement is 

$$
\psi = \frac{M_{m} \rho M_{m}^{\dagger}}{\tr(M_{m}^{\dagger} M_{m}\rho)}
$$


# Von Neumann entropy
  
$$
H(\rho) = - \tr[\rho \log \rho] = -\sum_{j} \lambda_{j} \log \lambda_{j}
$$

where $\lambda_{j}$ are the eigenvalues.
  
$$
H(\rho) = - \braket{ \psi | \log \rho | \psi } = - \braket{ \log \rho }  
$$
  
$\log(A)$ is defined as follows
  
$$
\displaylines{
A = \sum_{j} \lambda_{j} \ket{\psi_{j}} \bra{\psi_{j}} \\
\log(A) \triangleq \sum_{j} \log(\lambda_{j})\ket{\psi_{j}} \bra{\psi_{j}}
}
$$
  
# Pauli operators
  
$$
\displaylines{
  
\sigma_0 = I = \begin{bmatrix}
1 & 0 \\ 0 & 1
\end{bmatrix} = \ket{0} \bra{0}  + \ket{1} \bra{1}  \\
\sigma_1 = X = \begin{bmatrix}
0 & 1 \\ 1 & 0
\end{bmatrix} = \ket{0} \bra{1} + \ket{1}  \bra{0} \\
\sigma_2 = Y = \begin{bmatrix}
0 & -i \\ i & 0
\end{bmatrix} = -i \ket{0} \bra{1} + i \ket{1}  \bra{0} \\
\sigma_3 = Z =\begin{bmatrix}
1 & 0 \\0 & -1
\end{bmatrix} = \ket{0} \bra{0} - \ket{1} \bra{1}
  
}$$
  
# Relative entropy (Kullback - Leibler)
  
$$
H[p \Vert q] \triangleq \sum_{i} p_{i} \log \frac{p_{i}}{q_{i}}
$$
  
# Quantum relative entropy
  
$$
S(\rho \Vert \sigma) \triangleq \tr(\rho \log \rho) - \tr(\rho \log \sigma)
$$

# Joint quantum entropy
  
  
$$
S(A,B) \triangleq -\tr(\rho^{AB} \log(\rho^{AB}))
$$
  
where $\rho^{AB}$ is the density matrix of the system $AB$
  
## Theorem
  
$$
S \left( \sum_{i} p_{i} \ket{i} \bra{i} \otimes \rho_{i} \right) = H(p_{i}) + \sum_{i} p_{i}S(\rho_{i})
$$
  
# Conditional quantum entropy
  
$$
S(A|B) \triangleq S(A,B) - S(B)
$$
  
# Quantum mutual information
  
$$
\begin{align}
S(A:B) &\triangleq S(A) + S(B) - S(A,B) \\
&= S(A) - S(A|B) \\
&= S(B) - S(B|A)
\end{align}
$$

# Entropy of tensor product
  
$$
S(\rho \otimes  \sigma) = S(\rho) + S(\sigma)
$$

# Measurement and entropy
  
# Entropy of a mixture of quantum states