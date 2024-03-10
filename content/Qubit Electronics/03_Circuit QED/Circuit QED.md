**warning:** some formulas can be off by a factor $\hbar$ . #todo ask to Riente where yyou need it
# From atomic physics to quantum optics

The idea of superconducting circuit is to "mimic" the behaviour of real atoms. The great advantage of superconducting circuits is that they can be more easily **tuned**.
As mentioned in the lecture on [[Superconductive qubits]], the energy levels of the atoms are discrete. 

![[natural atom.png|300]]

Furthermore, the quantum state of an atom can be influenced by an electromagnetical radiation, giving rise to *stimulated emission and absorption*. This gives some degree of freedom in controlling its state.

We will be interested in doing the same with SC circuits. But before diving in to how a SC circuit can be controlled trough EM radiation, is useful to review very briefly what happens in the case of natural atoms.

In first approximation, the coupling between an atom and an electromagnetic wave is described by the interaction of the electric field $\vec{E}$  with the electric dipole of the atom $\vec{d}$:

$$
H = - \underbrace{\vec{d}\ \cdot \ \vec{E}(t)}_{ g } \tag{1}
$$

Where $g$ is a factor that describes the strength of the coupling.

To eccitate a transition between the state $\ket{0}$ and $\ket{1}$ , is possible to use an electromagnetic wave with a frequency $\omega$ that matches the energy difference between this two levels: $\hbar \omega = E_{01} = \hbar \omega_{01}$ . For instance the electric field can be chosen as:

$$
\vec{E}(t) = E_0 \cos(\omega_{01}) \tag{2}
$$

Where $E_0$ is the amplitude of the electric field.

To increase the strength of the field, and therefore the strength of the coupling $g$ , is possible to exploit a [Fabry Perot cavity](https://en.wikipedia.org/wiki/Fabry–Pérot_interferometer). 

We will not describe in detail this apparatus, we will just limit ourself in describing some of the main important facts.

A Fabry Perot cavity (FPC) is a cavity created between two semi-reflective mirrors. A light beam can be transmitted across a FPC only if the frequency is "close" to a multiple of the resonant frequency of the cavity $\omega_r$, that depends on its geometry. 

The transmitted intensity across the FPC follows a behavieour similar to this:
![[Pasted image 20240308172809.png]]
Where the peaks are centered in correspondence of the resonant frequencies (or wavelengths).
Under the resonant condition, stationary wave are formed inside of the cavity, giving rise to an electric field that is related to the volume of the cavity $V$ by:

$$
E \propto \frac{1}{\sqrt V} \tag{3}
$$

Therefore the field is stronger the smaller is the cavity.

# From cavity to QED
**Warning:** In this section many subsequent approximation will be used. To help the reader, we have underlined with bold characters when a new approximation is intruduced.

To operate qubits it is possible to realize a circuit that works similarly to a FPC. A possible realization is shown is the following figure:

![[Pasted Graphic.png]]

The circuit is built depositing three conductive stripes. The stipe in the middle is the conductive part, that is insulated from the two external stripes, that are grounded. 
The FPC is created in the central conductor using the two "cuts" that are visible in the figure. This creates a stripe of length $d$, that behaves as a resonator. In this case, the resonance condition occurs when the wavelength of the incoming *signal* (is optical or electronical?) is a multiple of the length of the resonator.

This configuration creates a tightly confined electric field in proximity of the resonator, that can be coupled with a qubit (Transmont qubit) as shown in the figure:
#todo mention the Zero Point Field
![[Pasted Graphic 1.png]]

In general the resonator has many resonant frequencies. Even so, when the circuit is operated at a frequency that is colse to a particular resonating frequency $\omega_{r}$, is possible to neglect all the other resonating modes. 
Under this approximation, called **one mode approximation**, the resonator can be treated as an armonic oscillator (LC circuit) with a frequency $\omega_{r}$.    
Therefore, the system can be schematized using the following lumped element model:

![[Pasted Graphic 3.png]]

Where $C_{g}$ is a capacitative term that describes the coupling between the Qubit and the resonator.

To understand how the system behaves we need to write a suitable Hamiltonian.
If the Resonator and the Qubit were not interacting, the hamiltonian would be just the sum of the two single Hamiltonians:

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \\
 &=  \frac{Q_{r}^{2}}{2C_{r}}  + \frac{1}{2} C \omega_{r} \Phi^{2}_{r}\ + \dots\\
&=  \hbar\omega_{01}(\hat{a}^{\dagger}\hat{a}+1/2) + \ \dots
\\ 

\end{align} \tag{4}
$$

Where in writing the final form of $\hat{H}_\text{qubit}$, the same **approximation** as in [[Superconductive qubits]] has been used.
Since the two are capacitatively coupled, to describe the system is essential to add a term that takes this interaction into account. This is done adding to the total hamiltonian a very very **mysterious interaction term**: 

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \ + \ \hat{H}_{\text{qubit-resonator}}\\
&= \dots \ - \ g(\hat{a}^{\dagger} - \hat{a})(\hat{b}^{\dagger} - \hat{b})
\end{align} \tag{5}
$$
The factor $g$, as in the case of natural atoms, is a quantity that describes the strength of the interaction.
Since the qubit is operated in a regime where only the two least energetic levels are accessible, the more general operators $\hat{b}$ and $\hat{b}^{\dagger}$ can be replaced with the operators $\hat{\sigma}_{-}$ and $\hat{\sigma}_{+}$ respectively, that act on a two level system.

We recall that the definitions of $\hat{\sigma}_{-}$ and $\hat{\sigma}_{+}$:

$$
\begin{align}
\hat{\sigma}_{-} &= \ket{0}\bra{1} && \text{``kills } \ket{0} \text{ and transforms } \ket{1} \text{ into } \ket{0} \text{"} \\
\hat{\sigma}_{+} &= \ket{1}\bra{0} &&\text{``kills } \ket{1} \text{ and transforms } \ket{0} \text{ into } \ket{1} \text{"}\\   
\end{align} \tag{6}
$$

This approximation can be regarded as **two levels system approximation**.
Tu further simplify the model is possible to neglect the high frequency term, applying the **rotating waves approximation**, already introduced in the chapter about [[Superconductive qubits]].

Adding together all this very intuitive, clear approximations, we get the so called **Jaynes-Cummings Hamiltonian** (boxed): 

$$
\begin{align}
\hat{H} &= \hat{H}_{\text{resonator}}\ + \ \hat{H}_{\text{qubit}} \ + \ \hat{H}_{\text{qubit-resonator}}\\
&=^1 \dots \ - \ g(\hat{a}^{\dagger} - \hat{a}) (\hat{b}^{\dagger} - \hat{b}) \\
&=^2 \dots \ - \ g(\hat{a}^{\dagger} \hat{\sigma}_{-} + \hat{a}\hat{\sigma}_{+})\\
&=^3 \boxed{\omega_r \hat{a}^{\dagger} \hat{a}+\frac{ \omega_q}{2} \hat{\sigma}_z+ g\left(\hat{a}^{\dagger} \hat{\sigma}_{-}+\hat{a} \hat{\sigma}_{+}\right)}
\end{align} \tag{7}
$$

with:
- 1. Single mode approximation, approximated interaction term and approximated $\hat{H}_{\text{qubit}}$
- 2. Two levels approximation
- 3. Rotating waves approximation

In the interaction term, $\hat{a}^{\dagger} \hat{\sigma_{-}}$ describes the destruction of an excitation of the qubit with the creation on a photon, while $\hat{a}\hat{\sigma_{+}}$ describes the creation excitation for the annihilation of a photon.
Therefore, now the interaction term has the following interpretation: the qubit can:
- Go from $\ket{0}$ to $\ket{1}$ absorbing one photon.
- Go from $\ket{1}$ to $\ket{0}$ emitting one photon.

The Jaynes-Cummings Hamiltonian can be solved exactly and used to describe many situations in which an atom, artificial or natural, can be considered a two-level system in interaction with an electromagnetic field.
In our case, the interaction described by this hamiltonian will be useful to control the state of the qubit.

We are engineers, we find peace and great delight in making approximations. One could even argue that making approximations is our life purpose. 
So, let us have some fun with even more funny approximations!

Approximations to further simplify the model can be done in the **dispersive regime**, where the qubit-resonator detuning is much grater with respect to  the strength of the coupling: $\Delta=\hbar\ |\omega_{01}-\omega_{r}| \gg g$.  Under this condition it is possible to treat the interaction term with perturbation theory, leading to the following result:

$$
\hat{H} = \underbrace{ (\omega_{r} + \chi\hat{\sigma}_{z}) }_{ \text{resonator frequency} }\hat{a}^{\dagger}\hat{a}\ +\ \frac{\omega_{01}}{2}\hat{\sigma}_{z} \tag{8}
$$
Where $\chi = \frac{g^{2}}{\Delta}$ is called "Dispersive interaction term" and $\hat{\sigma}_{z}$ is the pauli z-matrix that acts on the qubit state.
The important thing to notice is that now the actual resonator frequency depends on the state of the qubit, and is equal to:
- $\omega_{r} + \chi$ if the state of the qubit is $\ket{1}$
- $\omega_{r} - \chi$ if the state of the qubit is $\ket{0}$

This can be exploited for the readout of the qubit state.

# Control and readout of one qubit

The state **readout** is performed using a frequency $\omega$ close to the resonance frequency of the bare resonator $\omega_{r}$.
Under this condition the transmitted spectra depend on the state of the qubit as shown in this picture:
![[ReadoutQubitstate.png]]
So, by observing what is the resonance frequency one can perform **non destructive measurement** on the qubit.
But what does actually means? #todo ask Riente

The state **control** can be performed using a frequency $\omega$ that matches the frequency between the two states of the qubit $\omega_{01}$.
Since in this case the driving frequency $\omega$ is different from the resonance frequency, the incoming signal will be almost completely reflected. Even so, some photons with frequency $\omega_{01}$ can still enter in the cavity, and interact with the qubit through the Jaynes-Cummings Hamiltonian, thus affecting its state.
#todo add a graphical summary 
# multiple qubits control and readout

With the same circuit, is possible to put multiple qubit near the resonator in order to have a many-qubit system. An actual possible implementation is schematized in this figure:
![[Many qubit.png]]
Each of the qubit can be designed in order to have its own frequency $\omega_{01}^{(i)}$ $i = 1 \dots N_{\text{qubit}}$. This makes possible
- **individual state control**: using a driving frequency $\omega=\omega_{01}^{(i)}$ one can control the state of the i-th qubit.
- **global readout**: using a driving frequency $\omega=\omega_{r}$, one will obtain a transmission spectrum with a pattern that will be affected by the state of each qubit.

# Xmon qubit
#todo rewrite decently
The presented theory was derived considering a Trasmon qubit realized using interdigital capacitor, but works also for a more convenient implementation of the charge qubit: the Xmon qubit.

All the theory remains untouched, from the lumped element circuit to the derivation of the hamiltonian. The only thing that changes is how the qubit is implemented.

The name comes from the cross shape.
the advantages of this qubit are many:
- interconnectivity: easy to couple to other qubits or to measurment instruments
- tunability: can be tuned replacing the Josephson junction with a squid

![[Multiple Xmon qubits.png]]


