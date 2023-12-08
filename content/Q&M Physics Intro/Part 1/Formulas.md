---
draft: false
---

- Schrodinger equation $$ -\frac{\hbar^{2}}{2m} \frac{ \partial^{2} \Psi(x,t)  }{ \partial t } +U(x) \Psi(x.t) = i \hbar \frac{ \partial \Psi(x,t) }{ \partial t } $$
	- Time independent $$ \Psi(x,t) = \sum_{n} c_{n} \Psi_{n} (x) e^{ -i E_{n}t/\hbar } $$ 
- Plane wave $$ \Psi(x) = A e^{ ikx } + B e^{ -ikx } $$ 
- Operators
	- Position $$ \hat{x} = x $$
	- Momentum $$ \hat{p} = -i \hbar \partial_{x} $$
- Infinite potential well
	- Energy $$E = \frac{\hbar^{2} \pi^{2} n^{2}}{2 L^{2} m} $$
	- Stationary states $$ \Psi_{n} = \sqrt{ \frac{2}{L} } \sin\left( \frac{n\pi}{L}x \right) $$
	- Coefficients $$ 
\begin{align}
 & \Psi_{n} = \sum_{n} c_{n} \phi_{n} \\
 & c_{n} = \braket{ \phi_{n}|\Psi } 
\end{align}
$$ 
- Harmonic oscillator
	- Hamiltonian $$ \hat{H} = \hbar\omega \left[ \hat{A}^{\dagger} \hat{a} + \frac{1}{2} \right] $$ 
	- Energy $$ E_{n} = (n + 1) \hbar \omega $$ 
	- Stationary states $$ \ket{\Psi_{n}} = \frac{1}{\sqrt{ n! }} (\hat{a}^{\dagger})^{n} \ket{\psi_0}  $$ $$ \psi_0(x) = \left( \frac{m\omega}{\pi \hbar} \right)^{1/4} e^{ -m\omega x^{2}/2\hbar } $$
	- Ladder operators $$ \begin{align}
& \hat{a} = \frac{\hat{x}}{x_0} + i \frac{\hat{p}}{p_0} \\
& \hat{a}^{\dagger} = \frac{\hat{x}}{x_0} - i \frac{\hat{p}}{p_0} \\
 \\
& x_0 = \sqrt{ \frac{2\hbar}{m\omega} }, \quad p_0 = \sqrt{ 2\hbar m\omega }
\end{align} $$ 
- Uncertainty $$ \Delta x = \sqrt{ \braket{ x^{2} } - \braket{ x } ^{2} }$$
	- Heisenberg uncertainty principle $$ \Delta x \Delta p \geq \frac{\hbar}{2} $$ 
- Pauli matrices $$ S_{x} = \frac{\hbar}{2} \underbrace{ \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} }_{ \sigma_{x}} \quad S_{y} = \frac{\hbar}{2}\underbrace{ \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} }_{ \sigma_{y} } \quad S_{z} = \frac{\hbar}{2 }\underbrace{ \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} }_{ \sigma_{z} }$$
- Momentum ladder $$ \sigma_{+} = \hbar \begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix} \quad \sigma_{-} = \hbar\begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix}$$
- Dirac notation
	- Ket $$ \ket{x} = \begin{pmatrix}
x_1 \\
x_2 \\
\vdots
\end{pmatrix}$$
	- Bra $$ \bra{x} = \ket{x} ^{*} = \begin{pmatrix}
x_1^{*} & x_2^{*} & \dots
\end{pmatrix} $$
- Orthonormality $$ f_{n} \text{ and } f_{m} \text{  are orthonormal} \iff \braket{ f_{n} | f_{m} } = \delta_{nm} $$
- Hermitian operators $$ \hat{O} \text{ is hermitian} \iff \hat{O} = O ^{\dagger} $$
	- *Hermitian operators correspond to observables*
- Unitary operator $$ \hat{O} \text{ is unitary} \iff O^{-1} = O^{\dagger} $$
- Tensor product $$ \ket{\Psi_{a} \Psi_{b} } \triangleq \ket{\Psi_{a} } \otimes \ket{\Psi_{b} }  $$ 
- Bell's inequality $$ N(A_{+}, B_{-}) + N(B_{+}, C_{-} ) \geq N(A_{+}, C_{-}) $$ 
- Commutators 
$$
\begin{align}
 & [\hat{x}, \hat{p}] = -\hbar \omega \\
 \\
 & [\hat{H}, \hat{a}^{\dagger}] = \hbar\omega \hat{a}^{\dagger} \\
 & [\hat{H}, \hat{a}] = - \hbar\omega \hat{a} \\
 \\
 & [L_{x}, L_{y}] = i \hbar L_{z}  &  &  x \to y, y \to z, z \to x \\
 & [L^{2}, L_{\alpha}] = 0  &  &  \alpha = x,y,z \\
 & [L^{2}, L_{\pm}] = 0 \\
 & [L_{z}, L_{\pm}] = \pm \hbar L_{\pm} \\
 & 
\end{align}
$$


- 