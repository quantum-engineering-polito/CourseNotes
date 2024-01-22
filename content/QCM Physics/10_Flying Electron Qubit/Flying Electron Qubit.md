---
nextnote: 
author: BabelDev0
authorlink: https://github.com/BabelDev0
---
# Qubit

A qubit is the fundamental unit of information in quantum computing. In contrast to classical bits, which can only exist in one of two states (0 or 1), qubits can simultaneously exist in multiple states thanks to the superposition principle in quantum mechanics. Qubits can be realized through diverse physical systems, including atoms, ions, or superconducting circuits.

We start creating a quantum system with only two state (or focusing only on this two state)

$$ 
\displaylines{
\ket{\psi} = \alpha\ket{0}+\beta\ket{1}
\\\\
|\alpha|^{2}+|\beta|^{2} = 1
}
$$

Since $\alpha,\beta \in \mathbb{C}$ we have 4 values to define the value of a qubit in an unique way:

$$
\displaylines{
\alpha = Re\{\alpha\}+i\ Im\{\alpha\}
\\\\
\beta = Re\{\beta\}+i\ Im\{\beta\}
}
$$

We want to represent the qubit geometrically and to do this we need to decrease the number of parameters fortunately not all 4 values above are independent:

$$
\ket{\psi} = r_{\alpha} e^{i\phi_{\alpha}}\ket{0}+r_{\beta} e^{i\phi_{\beta}}\ket{1} 
$$

we have written the qubit using the polar coordinate system.
Now we can manipulate the qubit as following:

$$
\displaylines{
\ket{\psi} = e^{i\phi_{\alpha}} \left( r_{\alpha} \ket{0} + r_{\beta} e^{i(\phi_{\beta} - \phi_{\alpha})} \ket{1} \right)
\\\\
\ket{\psi} = e^{i\phi_{\alpha}} \left( r_{\alpha} \ket{0} + r_{\beta} e^{i\phi} \ket{1} \right) \qquad \phi= \phi_{\beta} - \phi_{\alpha}
}
$$

Since global phases do not have observable effects in quantum mechanics, we can omit it when considering measurements or other physical phenomena (if you are not comfortable with this try calculating the expected value of a generic operator $\hat{O}$ for the state $\ket{\psi}$)


$$
\ket{\psi} =  \left( r_{\alpha} \ket{0} + r_{\beta} e^{i\phi} \ket{1} \right) \qquad \phi= \phi_{\beta} - \phi_{\alpha}
$$


then we remember that $|r_{\alpha}|^2+|r_{\beta}|^2 = 1$ so we can rewrite them as :

$$
\displaylines{
r_{\alpha} = \cos\left( \frac{\theta}{2} \right) \qquad r_{\beta} = \sin\left( \frac{\theta}{2} \right)
}
$$
where $\theta$ is the angle between the vector representing the qubit state and the positive z-axis. It is related to the probabilities of the qubit being in the $\ket{0}$ or $\ket{1}$ state. So we can rewrite the qubit as:

$$
\ket{\psi} = \cos\left( \frac{\theta}{2} \right)\ket{0}+\sin\left( \frac{\theta}{2} \right)e^{i\phi}\ket{1} \qquad \theta \in [0,\pi],\ \phi \in [0,2\pi[
$$

# Bloch sphere

![[Bloch Sphere Qubit Representation.png|500]]

The Bloch sphere provides a clear geometric picture of the qubit state, making it easier to visualize and understand quantum operations. It captures both the amplitude and phase information of the qubit state.

**states along y-axis:**

$$
\ket{0}\  \text{and}\  \ket{1} 
$$

**states along x-axis:**

$$
\displaylines{
\ket{+} = \frac{\sqrt{ 2 }}{2}\ket{0}+\frac{\sqrt{ 2 }}{ 2 }\ket{1}
\\\\
\ket{-} = \frac{\sqrt{ 2 }}{2}\ket{0}-\frac{\sqrt{ 2 }}{ 2 }\ket{1}
}
$$

To achieve esperimentally the qubit we need to perform operations that allows us to address each point of the sphere.

# Flying Electros Qubit

flying qubits have a more restricted use case than stationary ones - they are only used to propagate the information between macroscopic distances, whereas stationary qubits are used to not only store information, but also to perform calculations.

![[2024-01-22 19.43.01.jpg|200]] 
>[!note]
>why not

Flying electron qubits rely on electron waveguides, beam splitters and phase shifters. These fundamental building blocks of electron quantum optics are realised by high mobility, doped GaAs/AlGaAs [[Heterostructures|heterostructures]] ([[HEMT|HEMTs]]).

![[Screenshot 2024-01-22 at 19.56.20.png|400]]

Through the placement of metallic Schottky gates onto the GaAs heterostructure, one can effectively customize the geometry of the two-dimensional electron gas (2DEG). Application of a suitably negative voltage to the gate results in the repulsion of electrons beneath it due to the generated electrostatic field, leading to local depletion of the 2DEG. Consequently, this method allows for the deliberate alteration of the 2DEG morphology to achieve intricate structures. 

In its most basic form, a flying electron qubit is made of a propagating electron within two identical electronic waveguides. The qubit states, $\ket{0}$ and $\ket{1}$, are defined by which channel is occupied by the electron during its flight, either the top arm or the bottom arm.

![[Screenshot 2024-01-22 at 19.45.19.png|450]]

 **Two Waveguides**: The device consists of two identical electronic waveguides, which are paths that allow electrons to move. These waveguides represent the two possible states of the qubit: $\ket{0}$ and $\ket{1}$. The electron traveling in the upper waveguide represents the qubit being in state $\ket{0}$, and in the lower waveguide represents the qubit being in state $\ket{1}$.

**Tunnel Barrier**: Between the two waveguides, there is a "tunnel barrier". The height and width of this barrier can be adjusted to control the probability that the electron will tunnel from one waveguide to the other.

**Gate Voltage**: By applying a gate voltage, the height of the tunnel barrier is tuned. A higher barrier decreases the tunneling probability, and a lower barrier increases it. By fine-tuning this gate voltage, one can control the superposition state of the qubit.

the barrier allow us to control the $\theta$ angle and tune the superposition state:

![[Screenshot 2024-01-22 at 19.56.55.png|350]]

To completely control the state of an electronic flying qubit, we need to implement a rotation by an additional angle $\phi$ on the azimuthal plane of the Bloch sphere. A rotation by $\phi$ is understood as a phase shift between the two superposed states, so we can use the [[Aharonov-Bohm effect]] to apply this phase shift.

![[Screenshot 2024-01-22 at 19.59.48.png|450]]

Due to the Aharonov-Bohm effect, the phase shift introduced between the upper and lower path is proportional to the intensity of the magnetic field and the surface area enclosed by the two paths.

![[Screenshot 2024-01-22 at 20.01.02.png|300]]