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
H = \underbrace{ \frac{Q^{2}}{2C} }_{ \text{kinetic} } + \underbrace{ \frac{1}{2} C \omega_{01} \Phi^{2} }_{ \text{potential} \tag{3}}
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

We can now substitute the values inside $(3)$ to get 

$$
\begin{align}
\hat{H} &=\frac{-1}{2C}\frac{\hbar}{2Z_{0}}(\hat{a}^{\dagger}-\hat{a})^{2}-\frac{1}{2L}\frac{\hbar Z_{0}}{2}\Bigl(\hat{a}^{\dagger}+\hat{a}\Bigr)^{2} \\ \\

&=\boxed{ \hbar\omega_{01}(\hat{a}^{\dagger}\hat{a}+1/2) }
\end{align} \tag{4}
$$
 
## Superconductive qubit

Instead of using a simple inductor, which gave rise to an **harmonic potential** (i.e. equally spaced energy levels), we can replace it with a **Josephson Junction**, which, according to $(2)$, behaves as a non-linear inductor.

![[charge qubit.png|300]]

With this change we introduce some **anharmonicity** in the potential, with the wanted effect of obtaining different spacing between the various energy levels.

![[charge qb energy.png|300]]

### Hamiltonian of the SC qubit

To find the Hamiltonian of the qubit we need to find the expression of the (potential) which can be done using $(1)$: 

$$
\begin{align}
E(t)&=\int V(t)\,I(t)\,d t \\
&=\int\left({\frac{\mathrm{d}\Phi}{\mathrm{dt}}}\right)\left(I_{C}s i n{\frac{2\pi\Phi}{\Phi_{0}}}\right)d t \\
&=-E_{j}\cos{\frac{2\pi\Phi}{\Phi_{0}}}
\end{align}
$$

 with $E_{j} = I_{c} \Phi_0 / 2\pi$.

Similarly to before, the Hamiltonian will be: 

$$
\begin{align}
\hat{H} &= \frac{\hat{Q}}{2C} - E_{j} \cos \frac{2\pi\hat{\Phi}}{\Phi_0} \\
&= \frac{(2e)^{2}}{2C}\biggl(\frac{\hat{Q}}{2e}\biggr)^{2}-E_{j}\cos\hat{\phi}=\frac{(2e)^{2}}{2C}\hat{n}^{2}-E_{j}\cos\hat{\phi}  \\\\
& = \boxed{ 4E_{c} \hat{n}^{2} - E_{j}\cos \hat{\phi} }
\end{align}
$$

where

$$
\begin{align}
\hat{\phi} &= \frac{2\pi}{\Phi_0} \hat{\Phi} \\
\hat{n} &= \hat{Q} /2e \\
[\hat{\phi}, \hat{n}] &= i \\
E_{c} &= \frac{e^{2}}{2C} 
\end{align}
$$

$\hat{n}$ is the number operator and represents the number of Cooper Pairs.

For the time being we can limit our study to the case where the AC voltage generator is off and so we remove it from the circuit. We also have to consider the fact, that due to **defects** in the materials, and **noise**, even with no applied voltage, there will be a certain potential $V_{g}$ caused by $n_{g}$ charges in the SC island.

#todo are the charges really in the island???

To account for this we slightly change the Hamiltonian as follows: 

$$
\hat{H} = 4E_{c}(\hat{n} - n_{g}) ^{2} - E_{j} \cos \hat{\phi}
$$
### Choice of $E_{j}  /E_{c}$

To reduce the effect of the noise we can tweak the values of $E_{j}$ and $E_{c}$.

If $E_{j}/E_{c} = 0$ ($E_{c} \to \infty$) we will have the so called **transmon regime**, in which the energy levels will have the following shape:

![[transmon regime.png|400]]

It is easy to see that in this case we have a **very high anharmonicity** but, at the same time, we have a very high variation due to $n_{g}$.

Increasing the ratio $E_{j}/E_{c} = 1$ will modify the energy bands as follows:

![[transmon ng var.svg|500]]

We can see that this case has the same problem of being very sensitive to variations of $n_{g}$.

If we keep increasing the ratio $E_{j}/E_{c} = 10$ we loose anharmonicity but we start getting a scenario which is more tolerant to the noise:

![[transmon 3.png|300]]

To further increase the ratio we need to increase the capacitance of the capacitor (since $E_{c} \propto 1/Q$). When we get to $E_{j}/E_{c} = 50$ we get bands that are almost flat (similarly to what we had in the LC resonator) but we retain a bit of anharmonicity (the band are not equally spaced).

![[transmon 4.png|300]]

## Transmon regime approximations

### Neglect $n_{g}$

When operating in the transmon regime we can neglect the contribution of $n_{g}$ for the reason we just saw and thus the Hamiltonian becomes: 

$$
\hat{H}=4E_{c}~\hat{n}^{2}\!-\!E_{j}\,\cos\hat{\phi}
$$

### Taylor expansion

Since when working with qubits we are interested in the first two energy levels only, we can restrict our study to the bottom of the "valley", where the contribution of the cosine is negligible. Keeping this in mind and performing a Taylor expansion, we get 

$$
\begin{align}
\hat{H} &\simeq 4E_{c} \hat{n}^{2} + \frac{1}{2} E_{j} \hat{\phi} - \frac{1}{24} E_{j}\hat{\phi}^{4} \\
&= \frac{\hat{n}^{2}}{2C^{\prime}}+\frac{\hat{\phi}^{2}}{2L^{\prime}}-\frac{1}{24}E_{j}\hat{\phi}^{4}
\end{align}
$$

(in the second step we just assigned new names to the constants).

### Ladder operators

From the definitions of the ladder operators (which in this case we call $\hat{b}$ and $\hat{b}^{\dagger}$ to distinguish them from the ones of the harmonic oscillator) we get

$$
\begin{align}
\hat{n}&=i\sqrt{\hbar}\;\left(\frac{E_{j}}{32\,E_{c}}\right)^{1/4}(\hat{b}^{+}-\hat{b}) \\
\hat{\phi}&=\sqrt{\hbar}\,\left(\frac{2E_{c}}{E_{j}}\right)^{1/4}(\hat{b}^{\dagger}+\hat{b})
\end{align}
$$
which allows us to rewrite the Hamiltonian as 

$$
\hat{H} \simeq \sqrt{ 8E_{c} E_{j} } ~ \hat{b}^{\dagger}\hat{b}  - \frac{E_{c}}{2} (\hat{b}^{\dagger} \hat{b}^{\dagger} \hat{b}\hat{b} + 2\hat{b}^{\dagger} \hat{b})
$$

We dropped the terms with different number of $\hat{b}$ and $\hat{b}^{\dagger}$.

#todo why?

If we factor out $\hat{b}^{\dagger} \hat{b}$ we get 

$$
\hat{H} \simeq (\sqrt{ 8E_{c} E_{j} } - E_{c}) \hat{b}^{\dagger} \hat{b} - \frac{E_{c}}{2} \hat{b}^{\dagger} \hat{b}^{\dagger} \hat{b} \hat{b}
$$

This form highlights the similarity of the Hamiltonian with the one of the harmonic oscillator, except for the second term which is negligible (since we chose $E_{c}$ very small).

What we end up with is the following:

![[transmon 5.png|400]]

