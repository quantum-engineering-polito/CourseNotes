---
nextnote: "[[Circuit QED]]"
author: 
authorlink: 
draft: false
---
# Superconductivity

>[!note] For the Superconductivity review see the [[Superconductivity|QCMP notes]]

## Relevant formulas

$$
\begin{align}
& \text{Current:}&& I = I_{C} \sin(2\pi\phi/\phi_0) \tag{1}\\ \\

&\text{J. inductance:} && L=\frac{\Phi_{0}}{2\pi I_{C}\cos\left(\phi\right)} = \frac{L_{j}}{\cos(\phi)} \tag{2} \\ \\

&\text{J. energy:} && E\,=\,\frac{I_{C}\Phi_{0}}{2\pi}\,\left(1\,-\,\mathrm{cos}\,\,\phi\right)\,=\,E_{j}(1\,-\,\mathrm{cos}\,\,\phi) \tag{3}
\end{align}
$$

# Artificial atom

One of the possible ways to create qubits is to draw inspiration from nature and build a devices that behaves similarly to atoms, which have the following properties:

1) Have sharp energy levels
2) Have **different separation** between the levels
3) The internal state can be controlled by shining on the atom a laser with a specific wavelength
4) Have long decay and coherence time

![[natural atom.png|300]]

The idea to create an artificial atom is to arrange standard superconductive circuit elements (inductors, capacitors, etc.) in order to obtain the desired properties.

## LC resonator

![[LC resonator.png|200]]
The simplest device we can build is an LC resonator like the one in the picture above. Its potential and energy levels are the following ones:

![[LC resonator potential.png|300]]

For a real device $\omega_{01} = 1/\sqrt{ LC } \simeq 10 \text{GHz}$ #todo what is 0.5K?

This means that, in theory, this device could be operated at a temperature $\simeq 10\text{mK}$. The problem is that the energy levels are all equally spaced and this implies that it is **impossible** to interact with a specific level without affecting the others.

In conclusion ==the LC resonator cannot be used as a qubit==.

Before proceeding to solve this issue it is useful to find the Hamiltonian of the LC resonator because it will be useful later.

### Hamiltonian of the LC resonator

Similarly to the classical case of the harmonic oscillator (mass and spring or ball in a cup), the Hamiltonian of the LC resonator can be written as the sum of two terms that resemble the kinetic and potential energy: 

$$
H = \underbrace{ \frac{Q^{2}}{2C} }_{ \text{kinetic} } + \underbrace{ \frac{1}{2} C \omega_{01} \Phi^{2} }_{ \text{potential} \tag{4}}
$$

To find the value of $H$ we still need to find $Q$ and $\Phi$, which can be obtained by using the **ladder operators** and the properties of the commutators: 

$$
\begin{align}
[\hat{Q}, \hat{\Phi}] &= \hat{\Phi}\hat{Q} - \hat{Q}\hat{\Phi} = i\hbar \\
[\hat{a}, \hat{a}^{\dagger}] &= \hat{a}\hat{a}^{\dagger} - \hat{a}^{\dagger}\hat{a} = 1 \\
 \\
\hat{a}^{\dagger} &= \sqrt{ \frac{1}{2\hbar Z_0} } (\hat{\Phi} - i Z_0\hat{Q}) \\
\hat{a} &= \sqrt{ \frac{1}{2\hbar Z_0} } (\hat{\Phi} + i Z_0\hat{Q})
\end{align}
$$

We can proceed by summing and subtracting $\hat{a}^{\dagger}$ and $\hat{a}$ to get $\hat{Q}$ and $\hat{\Phi}$:


$$
\begin{align}
\hat{a}^{\dagger} + \hat{a} &= 2{\color{red} \hat{\Phi}}  \sqrt{ \frac{1}{2\hbar Z_0} } \\
\hat{a}^{\dagger} - \hat{a} &= -2i ~ Z_0 {\color{red} \hat{Q}}  \sqrt{ \frac{1}{2\hbar Z_0} } \\
&\Downarrow  \\
\hat{\Phi} &= \sqrt{\frac{\hbar Z_0}{2} } (\hat{a}^{\dagger} + \hat{a}) \\
\hat{Q} &= i \sqrt{ \frac{\hbar}{2Z_0}}(\hat{a}^{\dagger} - \hat{a}) 
\end{align}
$$

With $Z_0 = \sqrt{ L / C }$.

We can now substitute the values inside $(4)$ to get 

$$
\begin{align}
\hat{H} &=\frac{-1}{2C}\frac{\hbar}{2Z_{0}}(\hat{a}^{\dagger}-\hat{a})^{2}-\frac{1}{2L}\frac{\hbar Z_{0}}{2}\Bigl(\hat{a}^{\dagger}+\hat{a}\Bigr)^{2} \\ \\

&=\boxed{ \hbar\omega_{01}(\hat{a}^{\dagger}\hat{a}+1/2) }
\end{align} \tag{5}
$$
 
## Superconductive qubit

Instead of using a simple inductor, which gave rise to an **harmonic potential** (i.e. equally spaced energy levels), we can replace it with a **Josephson Junction**, which, according to $(2)$, behaves as a non-linear inductor.

![[charge qubit.png|300]]

With this change we introduce some **anharmonicity** in the potential with the wanted effect of obtaining different spacing between the various energy levels.

![[charge qb energy.png|300]]

### Hamiltonian of the SC qubit

