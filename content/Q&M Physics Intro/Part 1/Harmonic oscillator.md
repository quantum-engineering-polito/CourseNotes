
The reason why we want to study the harmonic potential is that all potentials can be approximated with a harmonic one near one of their local minima.

Given the potential 

$$
U(x) = \frac{1}{2} k x^{2} = \frac{1}{2} m \omega^{2}x^{2} \qquad k = m\omega^{2}
$$

we can write the Hamiltonian as 

$$
\hat{H} = \frac{\hat{p}^{2}}{2m} + \frac{1}{2} m \omega^{2} \hat{x}^{2} = \frac{1}{2m} [\hat{p}^{2}+(m\omega x)^{2}]
$$
Which, introducing the constants 

$$
\begin{align}
p_{0}  & = \sqrt{ 2\hbar m\omega }\\
x_0  & = \sqrt{ \frac{2\hbar}{m\omega} }
\end{align}
$$

can be rewritten as 

$$
\hat{H} = \hbar\omega \left[ \left( \frac{\hat{p}}{p_0} \right)^{2} + \left( \frac{\hat{x}}{x_0} \right)^{2}\right]
$$

We can now introduce the two ladder operators 

$$
\begin{align}
\hat{a} & = \frac{\hat{x}}{x_0} + i \frac{\hat{p}}{p_0} \\
\hat{a}^{\dagger} & = \frac{\hat{x}}{x_0} -i \frac{\hat{p}}{p_0} \\
[\hat{a},\hat{a}^{\dagger}] &= 1
\end{align}
$$

that allow us to rewrite the Hamiltonian as 

$$
\hat{H} = \hbar\omega\left[ \hat{a}^{\dagger} \hat{a} + \frac{1}{2} \right]
$$

By evaluating the commutators 

$$
\displaylines{
[H, a] = -\hbar\omega a\\
[H, a^{\dagger}] = \hbar\omega a^{\dagger}
}
$$
we can easily find how the ladder operators act on a state. Supposing to know an eigenstate $\ket{\psi_{E}}$ of the Hamiltonian, we can look at the action of $H$ on $a \ket{\psi_{E}}$: 

$$
H~ a \ket{\psi_{E}} = ([H,a] + aH) ~ \ket{\psi_{E}} = (E - \hbar\omega) ~ a~\ket{\psi_{E}}
$$

This means that $a\ket{\psi_{E}}$ is still an eigenvector of $H$ with eigenvalue $E - \hbar\omega$. The same can be done with $a^{\dagger}$ obtaining that the new eigenvalue is $E + \hbar\omega$.

This shows that the ladder operators allow us to build an infinite number of eigenvectors with evenly spaced eigenvalues starting from a single eigenvector.

Since the energy cannot be negative there must be a minimum eigenvalue and a corresponding eigenstate which cannot be lowered: 

$$
a \ket{\psi_0} = 0
$$

Since the solution $\ket{\psi_0} = 0$ is not normalizable, we can use the condition above to find the ground state 

$$
\frac{1}{\sqrt{ 2\hbar m\omega }}\left( \hbar \frac{d}{dx} + m\omega x \right) \psi_0 = 0
$$
or 

$$
\frac{d\psi_0}{dx} = -\frac{m\omega}{\hbar}x\psi_0
$$

which has solution 

$$
\psi_0(x) = Ae^{ -m\omega x^{2} /2\hbar}
$$
with $A = (m\omega/\pi \hbar)^{1/4}$ which can be found applying the normalization condition.




