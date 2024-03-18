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

&\text{Voltage:} && V=\frac{\Phi_{0}}{2\pi } \dot{\phi} \tag{3}\\ \\
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

In principle, the initialization of this system in the ground state is relatively simple, because with current fabrication techniques we can design properly L and C to have a resonant frequency of $\omega_{01} = 1/\sqrt{ LC } \simeq 10 \text{GHz}$ which in terms of temperature is ($k_bT = \hbar\omega_{01}$) $0.5K$ 

This means that, in theory, this device could be operated at a temperature $\simeq 10\text{mK}$. The problem is that the energy levels are all equally spaced and this implies that it is **impossible** to interact with a specific level without affecting the others.

In conclusion ==**the LC resonator cannot be used as a qubit**==.

Before proceeding to solve this issue it is useful to find the Hamiltonian of the LC resonator because it will be useful later.

### Hamiltonian of the LC resonator

Similarly to the classical case of the harmonic oscillator (mass and spring or ball in a cup), the Hamiltonian of the LC resonator can be written as the sum of two terms that resemble the kinetic and potential energy: 

$$
H = \underbrace{ \frac{Q^{2}}{2C} }_{ \text{kinetic} } + \underbrace{ \frac{1}{2} C \omega_{01}^{2} \Phi^{2} }_{ \text{potential} \tag{4}}
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
\end{align} \tag{5}
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

 with $E_{j} = I_{c} \Phi_0 / 2\pi$.  $E_j$ is related to the energy of the **COOPER PAIRS** within the sample that tunnel coherently across the junction.

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
&\hat{\phi} = \frac{2\pi}{\Phi_0} \hat{\Phi} \\
&\hat{n} = \hat{Q} /2e \\
&[\hat{\phi}, \hat{n}] = i \\
&E_{c} = \frac{e^{2}}{2C} 
\end{align}
$$

$\hat{n}$ represents the number of Cooper Pairs.

For the time being we can limit our study to the case where the AC voltage generator is off and so we remove it from the circuit. We also have to consider the fact, that due to **defects** in the materials, and **noise**, even with no applied voltage, there will be a certain potential $V_{g}$ caused by $n_{g}$ charges in the SC island.

The perturbation induced by the $n_g$ charges arises due to defects or production errors, which are inevitable. These charges can reside within the island or in its vicinity, exerting influence on the circuit's state.

To account for this we slightly change the Hamiltonian as follows: 

$$
\hat{H} = 4E_{c}(\hat{n} - n_{g}) ^{2} - E_{j} \cos \hat{\phi}
$$
### Choice of $E_{j}  /E_{c}$

To reduce the effect of the noise we can tweak the values of $E_{j}$ and $E_{c}$.

If $E_{j}/E_{c} = 0$ ($E_{j} \to 0$) the energy levels will have the following shape:

![[transmon regime.png|400]]

It is easy to see that in this case we have a **very high anharmonicity** but, at the same time, we have a very high sensibility to variation of $n_{g}$ (noise/defect).

Increasing the ratio $E_{j}/E_{c} = 1$ will modify the energy bands as follows:

![[transmon ng var.svg|500]]

We can see that this case has the same problem of being very sensitive to variations of $n_{g}$.

If we keep increasing the ratio $E_{j}/E_{c} = 10$ we loose anharmonicity but we start getting a scenario which is more tolerant to the noise:

![[transmon 3.png|300]]

To further increase the ratio we need to increase the capacitance of the capacitor (since $E_{c} \propto 1/Q$). When we get to $E_{j}/E_{c} = 50$ we get bands that are almost flat (similarly to what we had in the LC resonator) but we retain a bit of anharmonicity (the band are not equally spaced). We are now in the so called **transmon regime**.

![[transmon 4.png|300]]

If we plot the CHARGE DISPERSION as a function of the ratio $\frac{E_{j}}{E_{c}}$ we get

![[charge_dispersion_relation.png|450]]

 we observe that the different energy levels have a dependence that goes like:

$$
\propto e^{-\sqrt{ 8 E_{j}/E_{c} }}
$$

We can also plot the **RELATIVE ANHARMONICITY** (difference of the splitting of the energy levels with respect to the case of equally spaced energy levels) as a function of $\frac{E_{j}}{E_{c}}$ and then we get:

![[relative_anahrmonicity.png|350]]

>[!Note] The dispersion is screened faster than the anharmonicity (exponential vs square root function)

## Transmon regime approximations

### Neglect $n_{g}$

When operating in the transmon regime we can neglect the contribution of $n_{g}$ for the reason that having flat band now we are not more dependent on $n_g$ : 

$$
\hat{H}=4E_{c}~\hat{n}^{2}\!-\!E_{j}\,\cos\hat{\phi}
$$

### Taylor expansion

Since when working with qubits we are interested in the first two energy levels only, we can restrict our study to the bottom of the "valley", where the contribution of the cosine is negligible. Keeping this in mind and performing a Taylor expansion, we get 

$$
\begin{align}
\hat{H} &\simeq 4E_{c} \hat{n}^{2} + \frac{1}{2} E_{j} \hat{\phi} - \frac{1}{24} E_{j}\hat{\phi}^{4} \\
&= \frac{\hat{n}^{2}}{2C^{\prime}}+\frac{\hat{\phi}^{2}}{2L^{\prime}}-{\color{red}\frac{1}{24}E_{j}\hat{\phi}^{4}}
\end{align}
$$

(in the second step we just assigned new names to the constants).

In this case (JJ instead of Inductor) we have a “corrected” Harmonic oscillator or a “weakly anharmonic oscillator”.

### Ladder operators

From the definitions of the ladder operators (which in this case we call $\hat{b}$ and $\hat{b}^{\dagger}$ to distinguish them from the ones of the harmonic oscillator) we get

$$
\begin{align}
\hat{n}&=i\sqrt{\hbar}\;\left(\frac{E_{j}}{32\,E_{c}}\right)^{1/4}(\hat{b}^{+}-\hat{b}) \\
\hat{\phi}&=\sqrt{\hbar}\,\left(\frac{2E_{c}}{E_{j}}\right)^{1/4}(\hat{b}^{\dagger}+\hat{b})
\end{align}
$$
which allows us to rewrite the first two term of the Hamiltonian as 

$$

\frac{\hat{n}^{2}}{2C^{\prime}}+\frac{\hat{\phi}^{2}}{2L^{\prime}} = \sqrt{ 8E_{c} E_{j} }~\hat{b}^{\dagger}\hat{b} 
$$

The term $\omega_{q}=\sqrt{ 8E_{c} E_{j} }$ describes the transition frequency of the system, as seen in the above image (sometimes also called **TRANSMON or QUBIT FREQUENCY**).

On the other hand, can be demonstrated that the **anharmonic part** of the Hamiltonian (highlighted in red within the formula) can be effectively reformulated using the Rotating-Wave Approximation (RWA). Within this approximation, terms within the Hamiltonian characterized by an unequal number of creation ($\hat{b}^\dagger$) and annihilation ($\hat{b}$) operators can be disregarded. This simplification arises because such terms typically entail rapidly oscillating components, which can be filtered out without altering the fundamental physical interpretation of the system, making their contribution negligible.

The validity of the Rotating-Wave Approximation hinges on the assumption that terms with unequal numbers of annihilation and creation operators lead to rapid oscillations. This assumption holds true when the energy associated with the qubit ($\hbar\omega_{q}$) significantly surpasses the characteristic energy scale of the system ($\frac{E_{c}}{4}$), a condition frequently observed within the transmon regime

So if we factor out $\hat{b}^{\dagger} \hat{b}$ we get 

$$
\displaylines{
\hat{H} \simeq (\sqrt{ 8E_{c} E_{j} } - E_{c}) \hat{b}^{\dagger} \hat{b} - \frac{E_{c}}{2} \hat{b}^{\dagger} \hat{b}^{\dagger} \hat{b} \hat{b}\\
\text{or}\\
\hat{H} \simeq \hbar\omega_{q} \hat{b}^{\dagger} \hat{b} - \frac{E_{c}}{2} \hat{b}^{\dagger} \hat{b}^{\dagger} \hat{b} \hat{b}
}
$$


What we end up with is the following:

![[transmon 5.png|400]]
The second term in the Hamiltonian gives NON-LINEARITY to the system and brings to the fact that the first transition frequency is larger than the second one, with a shift given by $E_c$

## Coherent Control of Qubits

To implement a logic gate effectively, it's imperative to understand the dynamics of our qubit within the transmon regime. In this regime, external charges cease to perturb the qubit, simplifying our study to focus solely on the internal dynamics.

When subjecting our qubit to an RF signal at the appropriate frequency (the transition $\ket{0} \rightarrow \ket{1}$ frequency), our primary concern is avoiding leakage, specifically the transition from the second to the third energy level, which is governed by anharmonicity.

The analysis of real-world measurements reveals a crucial relationship between pulse width (in ns) and error per gate (EPG). 

![[coherent_control.png|400]]

Observations indicate that upon reducing the pulse width, we see an INCREASE in the ERRORS, due to leakage. This is because when we reduce the pulse width applied to the circuit, we have sharper edges in the signal, so higher BAND in the frequency.

Moreover, as pulse duration increases, error per gate becomes predominantly influenced by relaxation and dephasing effects, indicative of decoherence phenomena.

![[coherent_control_zone.png|400]]

In essence, challenges associated with low pulse widths stem from finite anharmonicity, while those at high pulse widths are attributed to relaxation and dephasing effects. Therefore, optimal control necessitates pulse shaping to minimize leakage and operate within the designated "white region" highlighted in the analysis.

**Additional Insight:** It's worth noting that the transmon isn't the sole superconducting qubit option available. Other alternatives, such as quantronium and the Cooper pair box, although now obsolete, have been explored. These implementations often introduce parallel inductors to facilitate further tuning and unique effects, broadening the spectrum of available options for qubit control and manipulation.

![[other_qubit_tech.png]]